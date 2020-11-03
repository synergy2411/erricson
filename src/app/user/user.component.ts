import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { USER_DATA } from '../model/mocks';

@Component({
  selector : 'app-user',
  templateUrl : './user.component.html',
  styleUrls : ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  ngOnInit(){
    this.users = USER_DATA;
  }

  onMoreInfo(usr: User) {
    alert(`From Child Event : Mr. ${usr.lastName} is working with ${usr.company}!`);
  }

}
