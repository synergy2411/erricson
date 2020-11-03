import { Component } from '@angular/core';

@Component({
  selector : 'app-user',
  templateUrl : './user.component.html',
  styleUrls : ['./user.component.css']
})
export class UserComponent {

  user = {
    firstName : 'Bill',
    lastName : 'Gates',
    dob : new Date('Dec 21, 1965'),
    income : 50000,
    company : 'Microsoft',
    isWorking : true
  }

}
