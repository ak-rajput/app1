import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-rf',
  template: `
  <form [formGroup] = "myForm" (ngSubmit)="saveData(myForm.value)">
  First Name : <input type="text" formControlName="firstName"/>
   <span *ngIf="myForm.get('firstName').touched && myForm.get('firstName').invalid">
   FirstName is required
   </span><br/>
   Last Name : <input type="text" formControlName="lastName"/><br/>
   <input type="submit" value="Submit this form"/>
   </form>
  `,
  styles: [
  ]
})
export class RfComponent  {

  myForm= new FormGroup({
                    firstName: new FormControl(' ', Validators.required),
                    lastName: new FormControl('hello')
                    }) ;
                    
        saveData(myForm)
        {
        console.log(myForm.firstName);
        console.log(myForm.lastName );
        }                                  
}
