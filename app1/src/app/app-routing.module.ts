import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { BooksComponent } from './books/books.component';


const routes: Routes = [
  {
    path: 'allBooks',
    component: BooksComponent
  },
  {
    path: 'allPersons',
    component: PersonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
