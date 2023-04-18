import { Injectable } from '@angular/core';
import { Book } from '../entities/Book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  //allBooks: any[];
  allBooks:Book[]=[];
  constructor(private httpClient:HttpClient) { }

  async getBooks(){
     await this.httpClient.get<Book[]>("http://localhost:8080/books").subscribe(resp=>{
    this.allBooks=resp;
    });
    
  }

  async createBook(book:Book){
    await this.httpClient.post<Book>("http://localhost:8080/books",book).subscribe(resp=>{
    const createdBook:Book=resp;
    return createdBook;
    });
    
  }

  async ngOnInit(){
    await this.getBooks();
  
  }

}
