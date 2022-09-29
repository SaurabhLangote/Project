import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColDef } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { AddbookComponent } from 'src/app/Components/admin/addbook/addbook.component';
import { BookServiceService } from 'src/app/services/book-service.service';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  defaultColDef:ColDef={sortable:true, filter:true}

  colDefs = [
  
    {headerName: 'Id', field: 'id', sortable: true, filter: true},
    {headerName: 'Book Name', field: 'BookName', sortable: true, filter: true},
    {headerName: 'Category', field: 'Category', sortable: true, filter: true},
    {headerName: 'Author Name', field: 'Author', sortable: true, filter: true},
    {headerName: 'Quantity', field: 'Quantity', sortable: true, filter: true}
];

rowData: any;
data:any;

  
  bookData: any;
  displayedColumns: string[] = ['id','BookName', 'Author', 'Quantity', 'Category'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


  constructor(public dialog: MatDialog, private api: BookServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.getAllbooks();
  }
  addBook() {
    this.dialog.open(AddbookComponent)
      .afterClosed()
      .subscribe(val => {
        if (val === 'save') {
          this.getAllbooks();

        }
      })
  }
  getAllbooks() {
    this.api.getmyBook()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.data=res;
        }
      })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editData(row: any) {
    this.dialog.open(AddbookComponent, {
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllbooks();
      }
    })
  }
  deleteBook(id: number) {
    this.api.deleteBook(id)
      .subscribe({
        next: (res) => {
          this.toastr.success('', 'Book Deleted Successfully', {
            positionClass: 'toast-top-center'
          });
          this.getAllbooks();
        }
      })
  }


}


