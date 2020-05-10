import { Component } from '@angular/core';

@Component({
  selector: 'app-tdc',
  template: `
    <form #myForm="ngForm" (ngSubmit)="saveData(myForm.value)">
    First Name: <input type="text"
                #firstName="ngModel"
                ngModel
                name="firstName"
                required
                />
                
     <span *ngIf="firstName.touched && firstName.invalid">
           First name is Required
           </span><br/>
           
     Last Name: <input type="text"
                            #lastName="ngModel"
                            ngModel
                            name="lastName"
                            required/> <br/>
        <span *ngIf="lastName.touched && lastName.invalid">
          Lastname is Required
           </span>
           <br/>
       <input type="submit" value="submit this form"/>
       </form>
  `,
  styles: [
  ]
})
export class TdcComponent  {

saveData(myForm)
{
    console.log(myForm.firstName);
    console.log(myForm.lastName);  

}
}




