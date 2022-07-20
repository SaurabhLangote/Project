import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotificationComponent } from 'src/app/Components/admin/notification/notification.component';
import { ProfileComponent } from 'src/app/Components/admin/profile/profile.component';
import { BookServiceService } from 'src/app/services/book-service.service';
import { LogoutComponent } from '../logout/logout.component';


@Component({
  selector: 'app-navadmin',
  templateUrl: './navadmin.component.html',
  styleUrls: ['./navadmin.component.css']
})
export class NavadminComponent implements OnInit {

  dataSource: any;
  paginator: any;
  sort: any;
  no: any;
  requestDatalength: any;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private toastr: ToastrService,
    private api: BookServiceService) { }

  ngOnInit(): void {
    this.getAllRequests()
  }
  openNotification() {
    this.dialog.open(NotificationComponent)

  }

  logout() {
    
    this.dialog.open(LogoutComponent)
   
  }
  openInfo() {
    this.dialog.open(ProfileComponent)
  }

  getAllRequests() {
    this.api.getRequest()

      .subscribe({
        next: (res: any) => {
          this.requestDatalength = res.length
          console.log(this.requestDatalength)
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
          this.no = res.length;
        }
      })

  }
}
