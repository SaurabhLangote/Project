import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  isuser = false;
  isadmin = false;
  isAuthenticated = false;
  data: any
  user: any
  response: any

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  authenticateEmployee(data: any) {
    this.http.get("http://localhost:3000/registered").subscribe(Response => {
      this.user = Response;
      this.data = data;
      this.authenticateuser();
      this.navigate();
    })
  }

  authenticateuser() {
    this.response = (this.user.find((x: any) => {

      return x.Firstname == this.data.Firstname && x.Lastname == this.data.Lastname

    }))
  }

  navigate() {

    if (this.response) {
      this.navigateUser();
    } else {
      this.toastr.error('', 'Invalid Credentials ', {
        positionClass: 'toast-top-center'
      });
    }
  }

  navigateUser() {
    if (this.response.Role === 'admin') {
      this.isadmin = true;
      this.isAuthenticated = true;
      this.router.navigateByUrl('admin'),
        this.toastr.success('', 'Login Successful ', {
          positionClass: 'toast-top-center'
        });
    } else if (this.response.Role === 'user') {
      this.isuser = true;
      this.isAuthenticated = true;
      this.router.navigateByUrl('user'),
        this.toastr.success('', 'Login Successful', {
          positionClass: 'toast-top-center'
        });
    } else {
      this.toastr.warning('', 'Log In first !!', {
        positionClass: 'toast-top-center'
      });
    }
  }


}
