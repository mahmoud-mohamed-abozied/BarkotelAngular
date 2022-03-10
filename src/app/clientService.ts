import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

export interface book {
  title: string;
  Dop: string;
  Description: string;

}

@Injectable()
export class bookService {
  bookUrl = 'https://localhost:44337/api/Books';
  getBooks() {
    return this.http.get<book[]>(this.bookUrl);
  }
  constructor(private http: HttpClient) { }
}
