import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router, private toastr:ToastrService, private matDialog:MatDialog) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl('/home'),
    this.toastr.success('', 'Logout Successful',{
      positionClass:'toast-top-center'
    });
    this.matDialog.closeAll();
  }

}
