import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdcComponent } from './tdc/tdc.component';
import { RfComponent } from './rf/rf.component';
import { HttpclintComponent } from './httpclint/httpclint.component';
import { BooksComponent } from './books/books.component';
import { PersonsComponent } from './persons/persons.component';


@NgModule({
  declarations: [
    AppComponent,
    TdcComponent,
    RfComponent,
    HttpclintComponent,
    BooksComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
