import { DataService } from './service/data.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appName = 'My Awesome User App';
  bool = true;

  constructor(public dataService: DataService, public authService: AuthService) {}

  ngOnInit() {
    firebase.default.initializeApp({
      apiKey: 'AIzaSyC2nfdI1QH96I9ahbV5j7s-BjOo8-6Edqc',
      authDomain: 'ng-proj-39b77.firebaseapp.com'
    });
  }
  onIncrease() {
    this.dataService.counter++;
  }
  onToggle() {
    this.bool = !this.bool;
  }

  onLogout(){
    this.authService.logout();
  }
}

