
import { Router } from '@angular/router';
import { Book } from './../Model/Book.model';
import { Student } from './../student.model';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  listOfStudent:Student[]=[];
 bookList:Book[]=[];

  books={} as Book;

  constructor(private bookService : BookService,private router:Router){

  }

  buttonShow=false;

  ngOnInit(): void {
    //API call // rest
 this.bookService.findBook().subscribe((data:any)=>{
  this.bookList=data
 })
  }

}
