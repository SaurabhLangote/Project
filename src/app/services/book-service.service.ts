import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const bookUrl = environment.bookUrl;
const requestUrl = environment.requestUrl;
const userRegister = environment.userUrl;
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  addBook(data: any) {

    return this.http.post<any>(bookUrl, data);
  }

  getmyBook() {
    return this.http.get<any>(bookUrl);
  }

  updateBook(data: any, id: number)   // to update existing book
  {
    return this.http.patch<any>(bookUrl + id, data);
  }

  deleteBook(id: number) {
    return this.http.delete<any>(bookUrl + id)
  }

  deleteReqBook(id: number) {
    return this.http.delete<any>(requestUrl + id)
  }

  getBooks() {
    return this.http.get(bookUrl)
  }

  getBookById(id: any) {
    return this.http.get(bookUrl + id)
  }

  getRequest() {

    return this.http.get<any>(requestUrl)
  }

  issuedBook(data: any) {
    return this.http.post<any>(" http://localhost:3000/issuedBooks", data)
  }


  registerUser(data: any) {

    return this.http.post<any>(userRegister, data)
  }

  getRegistration(data: any) {
    return this.http.get<any>(userRegister, data)
  }

  deleteReg(id: number) {
    return this.http.delete<any>(userRegister + id)
  }

}
