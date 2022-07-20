import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/services/userservice.service';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router, private toastr:ToastrService,public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  centered = false;
  disabled = false;
  unbounded = false;

  booklist()
  {
    this.router.navigateByUrl('booklist')
  }

  BookRequest()
   {
    this.dialog.open(NotificationComponent)
   }

   regUsers(){
    this.router.navigateByUrl('regusers')
   }


}
