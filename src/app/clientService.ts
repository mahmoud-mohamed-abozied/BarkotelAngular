import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { Book } from "./books/Book";
/*export interface book {
  Title: string;
  Dop: string;
  Description: string;
  Cover: string;

}*/

@Injectable({
  providedIn: 'root'
})

export class bookService {
  readonly bookUrl = 'https://localhost:44337/api/Books';


  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }



  /*getBooks(): Observable<any[]> {
    return this.http.get<any>(this.bookUrl);
  }*/
 /* getBooks() {
    return this.http.get<book[]>(this.bookUrl);
  }*/
  constructor(private http: HttpClient) { }
}
