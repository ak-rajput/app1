import { Component  } from '@angular/core';

@Component({
  selector: 'app-persons',
  template: `
  <table border='1'>
  <tr><th>Id</th><th>Title</th><th>Price</th></tr>
  <tr *ngFor="let p of persons">
    <td>{{p.id}}</td>
    <td>{{p.name}}</td>
    <td>{{p.age}}</td>
    </tr>
</table>
  `,
  styles: [
  ]
})
export class PersonsComponent  {

  persons=[
    {id:101,name:'abc', age:21},
    {id:102,name:'abc', age:22},
    {id:103,name:'abc', age:213}
  ];

  
}
