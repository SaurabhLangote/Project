import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  postBook(data: any) {               //to add book     

    return this.http.post<any>("http://localhost:3000/books/", data);
  }

  getmyBook()                      //get all book                                                    
  {
    return this.http.get<any>("http://localhost:3000/books/");
  }

  putProduct(data: any, id: number)   // to update existing book
  {
    return this.http.patch<any>("http://localhost:3000/books/" + id, data);
  }

  deleteBook(id: number) {
    return this.http.delete<any>("http://localhost:3000/books/" + id)
  }

  deleteReqBook(id: number) {
    return this.http.delete<any>("http://localhost:3000/requestlist/" + id)
  }

  getBooks() {
    return this.http.get('http://localhost:3000/books')
  
  }
  getBookById(id: any) {
    return this.http.get("http://localhost:3000/books/" + id)
  }

  getRequest() {

    return this.http.get<any>("http://localhost:3000/requestlist")
  }

  issuedBook(data: any) {
    return this.http.post<any>(" http://localhost:3000/issuedBooks", data)
  }



  //for registration 
  registerUser(data: any) {                // to register user/admin

    return this.http.post<any>("http://localhost:3000/registered", data)
  }

   getRegistration(data:any){              // To get registered User
    return this.http.get<any>("http://localhost:3000/registered",data)
  }

  deleteReg(id:number){
   return this.http.delete<any>("http://localhost:3000/registered/"+id)  
  }

}
