import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { NgForm } from '@angular/forms';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Firstname !: string;
  Lastname !: string;
  constructor(
      private router: Router,
      private matDialog: MatDialog,
      private toastr: ToastrService,
      private service:AuthenticateService) { }

  ngOnInit(): void {
    
  }
  
  onSubmit(Form:NgForm)
  {
      this.service.authenticateEmployee(Form.value),
      this.matDialog.closeAll();
  }

  register() {
   
    this.matDialog.open(RegisterComponent)

  }
 
}
