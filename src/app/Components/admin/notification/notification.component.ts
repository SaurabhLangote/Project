import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { BookServiceService } from 'src/app/services/book-service.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  requestForm !: FormGroup;
  bookData: any;
  displayedColumns: string[] = ['BookName', 'Author', 'Quantity', 'Category', 'Cart'];
  dataSource !: MatTableDataSource<any>;
  count: number = 0;
  no: any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(
    public dialog: MatDialog,
    private api: BookServiceService,
    private formbuilder: FormBuilder,
    private toastr: ToastrService,
    
  ) { }

  ngOnInit(): void {

    this.requestForm = this.formbuilder.group({

      BookName: ['', Validators.required],
      Author: ['', Validators.required],
      Quantity: ['', Validators.required],
      Category: ['', Validators.required],

    })

       this.getAllRequests();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
  getAllRequests() {
    this.api.getRequest()

      .subscribe({
        next: (res: any) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
          this.no = res.length;
        },
        error: (err) => {
          this.toastr.error('', 'Error While Fetching The Data', {
             positionClass: 'toast-top-center'
          });
        }
      })

  }

  acceptReq(data:any){
    console.log(data,'ddfgdfgdfg')
    this.api.issuedBook(data).subscribe({
      next:(res)=>{
        

      }
    })
    this.toastr.success('', 'Request Accepted Successfully', {
       positionClass: 'toast-top-center'
    });
  }

  rejectReq(id:any){
     this.api.deleteReqBook(id).subscribe({
      next:(res)=>{
        }
      
     })
     
    this.toastr.error('', 'You Rejected Request', {
      positionClass: 'toast-top-center'
   });

   this.api.getRequest();
  
  }

}
