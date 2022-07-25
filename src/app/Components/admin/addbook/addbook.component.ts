import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(
    private formbuilder: FormBuilder,
    private api: BookServiceService,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public editBook: any,
    private dialogref: MatDialogRef<AddbookComponent>,
    ) { }

    bookForm !: FormGroup;
    actionBtn: string = "save";
    editData:any;
  ngOnInit(): void {

    this.bookForm = this.formbuilder.group({

      BookName: ['', Validators.required],
      Author:   ['', Validators.required],
      Quantity: ['', Validators.required],
      Category: ['', Validators.required]

    });
    if (this.editBook) {
      this.actionBtn = "Update";
      this.bookForm.controls['BookName'].setValue(this.editBook.BookName);
      this.bookForm.controls['Author'].setValue(this.editBook.Author);
      this.bookForm.controls['Quantity'].setValue(this.editBook.Quantity);
      this.bookForm.controls['Category'].setValue(this.editBook.Category);
    }

  }

  addBook() { 
    // console.log(this.bookForm.value)
    if (!this.editBook) {
      if (this.bookForm.valid) {

        this.api.addBook(this.bookForm.value).subscribe({
            next: (Response) => {
              // alert("Book Added Successfully !!")
              this.toastr.success('', 'Book Added Successfully',{
                positionClass:'toast-top-center'
              });
              this.bookForm.reset();
              this.dialogref.close('save');
              this.getAllbooks();
            },
            error: () => {
              alert("Error While Adding ");
            }
          })
      }
    } else {
      this.updateBook()
    }
  }
  updateBook() {
    this.api.updateBook(this.bookForm.value, this.editBook.id)
      .subscribe({
        next: (res) => {
           this.toastr.success('', 'Book Updated Successfully',{
            positionClass:'toast-top-center'
          });
          this.bookForm.reset();
          this.dialogref.close('update');
        },
      })
  }

  getAllbooks() {
    this.api.getmyBook()
      .subscribe({
        next: (_res) => {
        }
      })
  }
}
