import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  data: any
  constructor(private api:BookServiceService) { }

  ngOnInit(): void {
    this.getRegistration(this.data);
   }

    getRegistration(data: any) {
      this.api.getRegistration(data).subscribe({
        next:(res) => {
          console.log(res)
        }
      })
    }
  
  }


