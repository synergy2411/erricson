import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'My Awesome User App';
  bool = true;

  onToggle() {
    this.bool = !this.bool;
  }
}

