import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
// import { USER_DATA } from '../model/mocks';

@Component({
  selector : 'app-user',
  templateUrl : './user.component.html',
  styleUrls : ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  constructor(private dataService: DataService) {}

  ngOnInit(){
    // this.users = USER_DATA;
    // this.users = this.dataService.getData();
    this.dataService.getData()
      .subscribe(((users) => {
        this.users = users;
      }))
  }

  onMoreInfo(usr: User) {
    alert(`From Child Event : Mr. ${usr.lastName} is working with ${usr.company}!`);
  }

}
