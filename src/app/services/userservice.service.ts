import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const requestUrl = environment.requestUrl;

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  requestBook(data:any){
    return this.http.post<any>(requestUrl,data)
  }


  getIssuedBook(){

    return this.http.get<any>(" http://localhost:3000/issuedBooks")

  }

 
}
