import { Component } from '@angular/core';
import { Book } from 'src/app/entities/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent {
 books:Book[]=[];

 constructor(private bookService:BookService){}
  async ngOnInit() {
    await this.bookService.getBooks();
     this.books= this.bookService.allBooks;
    console.log(this.books)
  }
}
