import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-httpclint',
  template: `
  <table *ngIf="persons | async as myPersons else empty">
    <tr *ngFor="let p1 of myPersons">
        <td>{{p1.id}}</td>
        <td>{{p1.firstName}}</td>
      </tr><br/>
    </table>
    <ng-template #empty>
    NoPersons
    </ng-template>
   
  `,
  styles: [
  ]
})
export class HttpclintComponent  
{
  persons : Observable<Person[]>; 
  constructor(http: HttpClient)
  { 
  this.persons = http.get<Person[]>("http://localhost:3000/persons");

  }
}
  class Person
  {
        id;
        firstName;
  }

