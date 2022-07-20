import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BookServiceService } from 'src/app/services/book-service.service';

interface Role {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  selectedValue: any;
  RegisterForm !: FormGroup


  constructor(
    private matDialog: MatDialog,
    private formbuilder: FormBuilder,
    private api: BookServiceService,
    private toastr: ToastrService
  ) { }

  roles: Role[] = [
    { value: 'user', viewValue: 'user' },
    { value: 'admin', viewValue: 'admin' },

  ];


  ngOnInit(): void {

    this.RegisterForm = this.formbuilder.group({

      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
      Email: ['', Validators.required],
      Role: ['', Validators.required],
      Gender: ['', Validators.required],
      City: ['', Validators.required],
      Mobile: ['', Validators.required],
    });
  }

  onSubmit() {
    
    if (this.RegisterForm.valid) {
     this.api.registerUser(this.RegisterForm.value).subscribe({
        next: (Response) => {
         this.toastr.success('', 'You Are Registered Successfully', {
            positionClass: 'toast-top-center'
          });
          this.matDialog.closeAll();
         }
      })
    }
  }
}
