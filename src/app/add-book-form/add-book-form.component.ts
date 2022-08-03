import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../Model/Book.model';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {

  constructor(private bookService:BookService, private router:Router) {
    
   }
   books ={} as Book
  
  ngOnInit(): void {
  }

  public save(books:Book){
    this.bookService.saveBook(books).subscribe((res)=>{
      this.books==res;
      this.router.navigate(['/login'])
    })
  }

}
