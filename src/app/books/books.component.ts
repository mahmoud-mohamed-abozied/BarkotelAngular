
import { Component, OnInit } from '@angular/core';
//import { books } from '../books'
import { book, bookService } from '../clientService';

@Component({
  selector: 'app-books',
  providers: [bookService],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  //dataSource: book;
  error: any;
  headers: string[] = [];
  books: book[] | undefined;
  constructor(private bookService: bookService) { }

  ngOnInit(): void {
  }
  clear() {
    this.books = undefined;
    this.error = undefined;
    this.headers = []
  }

  getBooks() {
    this.bookService.getBooks()
      .subscribe({
        next: (data: book[]) =>
          this.books = data,
        error: (error:any) => this.error = Error,
      })
  }

  /*getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' :
  }*/
}

  
