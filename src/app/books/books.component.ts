
import { Component, OnInit } from '@angular/core';
import { Book } from '../books/Book'
import { bookService } from '../clientService';

@Component({
  selector: 'app-books',
  /*providers: [bookService],*/
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  Books: Book[] = [];
  /*  modalTitle: any;
    activateAddEditStuCom: boolean = false;
    student: any;*/
  constructor(private bookService: bookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.Books = data;
    });
  }
  /*refreshBooksList() {
    this.bookService.getBooks().subscribe(data => {
      this.Books = data;
    });
  }*/
 /* clear() {
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
  }*/

  /*getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' :
  }*/

}
