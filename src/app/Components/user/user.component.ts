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
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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
    private requestapi: UserserviceService,

  ) { }

  ngOnInit(): void {
    this.requestForm = this.formbuilder.group({
      BookName: ['', Validators.required],
      Author: ['', Validators.required],
      Quantity: ['', Validators.required],
      Category: ['', Validators.required],
    })

    this.api.getBooks().subscribe(Response => {
      this.bookData = Response;
      this.getAllbooks();
    });
  }

  btnVal = "RequestBook";

  getAllbooks() {
    this.api.getmyBook()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
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
  
  sendRequest(no: any) {
    if (no > 2) {
      this.toastr.error('', '3 Request only', {
        positionClass: 'toast-top-center'
      });
    }
    else {
      if (this.requestForm.valid) {
        this.requestapi.requestBook(this.requestForm.value)
          .subscribe({
            next: (res) => {
              this.toastr.success('', 'Request Sent !!', {
                positionClass: 'toast-top-center'
              });
            }
          })
      }
    }
  }
  requestBook(data: any) {

    this.requestForm.controls['BookName'].setValue(data.BookName);
    this.requestForm.controls['Author'].setValue(data.Author);
    this.requestForm.controls['Quantity'].setValue(data.Quantity);
    this.requestForm.controls['Category'].setValue(data.Category);

    this.sendRequest(this.count);
    this.count++;
  }
}
