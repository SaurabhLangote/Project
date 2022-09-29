import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  dataSource !: MatTableDataSource<any>;
  data:any;
  paginator: any;
  constructor(private dialog:MatDialog,private api:UserserviceService ) { }
   profile !: FormGroup

  ngOnInit(): void {
    this.getRegUser(this.data);
  }

  getRegUser(data:any){
    this.api.getReguser(data).subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.data=res;
        console.log( this.data);
      }
    })

  }

}
