import { Component } from '@angular/core';
import { Book } from 'src/app/entities/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent {
  constructor(private bookService:BookService){}
  async ngOnInit(){
    await this.bookService.getBooks();
  }
}
