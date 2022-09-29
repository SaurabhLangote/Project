import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColDef } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-reg-users',
  templateUrl: './reg-users.component.html',
  styleUrls: ['./reg-users.component.css']
})
export class RegUsersComponent implements OnInit {

  defaultColDef:ColDef={sortable:true, filter:true}

    colDefs = [
      {headerName: 'ID', field: 'id', sortable: true, filter: true},
      {headerName: 'Firstname', field: 'Firstname', sortable: true, filter: true},
      {headerName: 'Lastname', field: 'Lastname', sortable: true, filter: true},
      {headerName: 'Email', field: 'Email', sortable: true, filter: true},
      {headerName: 'Role', field: 'Role', sortable: true, filter: true},
      {headerName: 'Gender', field: 'Gender', sortable: true, filter: true},
      {headerName: 'City', field: 'City', sortable: true, filter: true},
      {headerName: 'Mobile', field: 'Mobile', sortable: true, filter: true}
     
  ];
  
  rowData: any;
  data:any;
  

  displayedColumns: string[] = ['id','Firstname', 'Lastname', 'Email', 'Role', 'Gender', 'City', 'Mobile'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private api: BookServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getRegistration(this.data);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRegistration(data: any) {
    this.api.getRegistration(data).subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.data=res;
      }
    })
  }

  deleteReg(id: number) {
    this.api.deleteReg(id).subscribe({
      next: (res) => {
        console.log(res)
        this.toastr.success('', 'User Deleted Successfully', {
          positionClass: 'toast-top-center'
        });
        this.getRegistration(this.data)
      }
    })

  }

}
