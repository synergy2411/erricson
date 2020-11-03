import { User } from './../../model/user.model';
import { Component, OnInit, Input, Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent {

  @Input() user: User;
  @Output() childEvent = new EventEmitter<User>();

  onMoreInfo(user: User) {
    this.childEvent.emit(user);
  }

}
