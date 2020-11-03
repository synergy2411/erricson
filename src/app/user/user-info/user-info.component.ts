import { User } from './../../model/user.model';
import { Component, Input } from '@angular/core';

@Component({
  selector : 'app-user-info',
  templateUrl : './user-info.component.html',
  styleUrls : ['./user-info.component.css']
})
export class UserInfoComponent {
  @Input() user: User;

  myClasses = {
    'feature' : true,
    'my-border' : false
  };

  myStyle = {
    'color' : 'red',
    'border' : '2px blue solid'
  }

  onToggleClass(){
    this.myClasses['my-border'] = !this.myClasses['my-border'];
    this.myClasses['feature'] = !this.myClasses['feature'];

  }

}
