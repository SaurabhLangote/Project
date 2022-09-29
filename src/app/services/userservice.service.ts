import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const requestUrl = environment.requestUrl;
const issuedBook = environment.issuedBooks;
const userUrl=environment.userUrl;

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  requestBook(data:any){
    return this.http.post<any>(requestUrl,data)
  }


  getIssuedBook(){

    return this.http.get<any>(issuedBook)

  }

  getReguser(data:any){
    return this.http.get<any>(userUrl,data)
  }

 
}
