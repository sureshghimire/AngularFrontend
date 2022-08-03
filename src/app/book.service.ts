import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './Model/Book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  urls="http://localhost:8080/book"
  constructor(private httpClient:HttpClient ) { }

  public findBook(){
return this.httpClient.get(this.urls+"/all");
  }

  public saveBook(books:Book){
    return this.httpClient.post(this.urls+"/add",books);
  }


}
