import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-navuser',
  templateUrl: './navuser.component.html',
  styleUrls: ['./navuser.component.css']
})
export class NavuserComponent implements OnInit {

  constructor(public dialog: MatDialog,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  logout()
  {
    this.dialog.open(LogoutComponent)
    
  }


}
