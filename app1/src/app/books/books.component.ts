import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  template: `
    <table border='1'>
    <tr><th>Id</th><th>Title</th><th>Price</th></tr>
    <tr *ngFor="let b1 of books">
      <td>{{b1.id}}</td>
      <td>{{b1.title}}</td>
      <td>{{b1.price}}</td>
      </tr>
  </table>
  `,
  styles: [
  ]
})
export class BooksComponent  {

  books=[
    {id:101, title:'java',price:1000},
    {id:102, title:'angular', price:2000},
    {id:103, title:'j2ee',price:3000}
  ];

}
