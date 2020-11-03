import { Component, OnInit, Input, Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent {

  @Input() user: any;
  @Output() childEvent = new EventEmitter<any>();

  onMoreInfo(user: any) {
    this.childEvent.emit(user);
  }

}
