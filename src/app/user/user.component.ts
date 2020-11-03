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
    isWorking : true,
    image : 'assets/images/bill.jpg',
    votes : 120
  };

  onMoreInfo(usr: any) {
    alert(`From Child Event : Mr. ${usr.lastName} is working with ${usr.company}!`);
  }

}
