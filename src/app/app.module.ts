import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HttpClientModule } from '@angular/common/http';
//import { HeaderComponent } from './header/header.component';

/*import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Output() searchcriteria = new EventEmitter<String>();
searchThis() {
  this.searchcriteria.emit(this.searchword)
}

newArray
searchThis(data) {
  this.content = this.newArray
  console.log(data)
  if (data) {
    this.content = this.content.filter(function (ele, i, array) {
      let arrayelement = ele.name.toLowerCase()
      return arrayelement.includes(data)
    })
  }
  else {
    console.log(this.content)
  }
  console.log(this.content)
}
}*/


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    //HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
