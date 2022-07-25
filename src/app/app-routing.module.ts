import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NavadminComponent } from './shared/navadmin/navadmin.component';
import { NavuserComponent } from './shared/navuser/navuser.component';
import { UserComponent } from './Components/user/user.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { BooklistComponent } from './shared/booklist/booklist.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotificationComponent } from './Components/admin/notification/notification.component';
import { AuthguardGuard } from './authguard.guard';
import { RegUsersComponent } from './Components/admin/reg-users/reg-users.component';
import { IssuedBooksComponent } from './Components/admin/issued-books/issued-books.component';
import { UserDetailsComponent } from './Components/user/user-details/user-details.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent ,canActivate:[AuthguardGuard]},
  {path:'navadmin',component:NavadminComponent,canActivate:[AuthguardGuard]},
  {path:'navuser',component:NavuserComponent,canActivate:[AuthguardGuard]},
  {path:'navhome',component:HomeComponent,canActivate:[AuthguardGuard]},
  {path:'user',component:UserComponent,canActivate:[AuthguardGuard]},
  {path:'login',component:LoginComponent,canActivate:[AuthguardGuard]},
  {path:'aboutus',component:AboutusComponent},
  {path:'booklist',component:BooklistComponent,canActivate:[AuthguardGuard]},
  {path:'register',component:RegisterComponent,canActivate:[AuthguardGuard]},
  {path:'notification',component:NotificationComponent,canActivate:[AuthguardGuard]},
  {path:'regusers',component:RegUsersComponent,canActivate:[AuthguardGuard]},
  {path:'issuedBooks',component:IssuedBooksComponent},
  {path:'UserDetails',component:UserDetailsComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
