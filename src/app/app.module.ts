import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UserComponent } from './Components/user/user.component';
import { NavhomeComponent } from './shared/navhome/navhome.component';
import { NavadminComponent } from './shared/navadmin/navadmin.component';
import { NavuserComponent } from './shared/navuser/navuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BookmoduleModule } from './shared/bookmodule/bookmodule.module';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { BooklistComponent } from './shared/booklist/booklist.component';
import { AddbookComponent } from './Components/admin/addbook/addbook.component';
import { NotificationComponent } from './Components/admin/notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './Components/admin/profile/profile.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { RegUsersComponent } from './Components/admin/reg-users/reg-users.component';
import { IssuedBooksComponent } from './Components/admin/issued-books/issued-books.component';
import { UserDetailsComponent } from './Components/user/user-details/user-details.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    NavhomeComponent,
    NavadminComponent,
    NavuserComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    BooklistComponent,
    AddbookComponent,
    NotificationComponent,
    ProfileComponent,
    FooterComponent,
    LogoutComponent,
    RegUsersComponent,
    IssuedBooksComponent,
    UserDetailsComponent,
    
    
 
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BookmoduleModule,
    ToastrModule.forRoot(),
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
