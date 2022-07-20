import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../Components/login/login.component';
import { RegisterComponent } from '../../Components/register/register.component';

@Component({
  selector: 'app-navhome',
  templateUrl: './navhome.component.html',
  styleUrls: ['./navhome.component.css']
})
export class NavhomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLogin() {

    this.dialog.open(LoginComponent);
  }
  openRegister() {
    this.dialog.open(RegisterComponent)
  }

}
