import { Component } from '@angular/core';
import { Book } from 'src/app/entities/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
  title:String="";
 author:String="";
 bookcondition:number=0;

 constructor(private bookService:BookService){}

 async createBook(){
  const createBook=new Book(0,this.title,this.author,this.bookcondition,true,0);
  //this.bookService.allBooks.push(createdBook);
  
  await this.bookService.createBook(createBook);
  
  
}


   
  ngOnInit(): void {
  }
}

