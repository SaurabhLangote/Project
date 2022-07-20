import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthenticateService } from './services/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private service:AuthenticateService, private router:Router,private toastr:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.service.isadmin)
      {
         return true; 
      }else if (this.service.isuser)
      {
        return true;
      }else
      {
        this.router.navigate(['']);
       
        this.toastr.warning('', 'Please Login First', {
          positionClass: 'toast-top-center'
        });
        return false;
      }
   
  }
  
}
