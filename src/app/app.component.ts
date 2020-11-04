import { DataService } from './service/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'My Awesome User App';
  bool = true;

  constructor(public dataService: DataService) {}

  onIncrease() {
    this.dataService.counter++;
  }
  onToggle() {
    this.bool = !this.bool;
  }
}

