import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn : 'root'
})
export class AuthService {

  private token: string = null;

  constructor(private router: Router) {}

  register(email: string, password: string) {
    firebase.default.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
      }).catch(err => console.log(err));
  }

  login(email: string, password: string) {
    firebase.default.auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        firebase.default.auth().currentUser.getIdToken()
          .then(token => {
            console.log(token);
            this.token = token;
            // this.router.navigate(['/users']);
            this.router.navigateByUrl('/users');
          });
      }).catch(err => console.log(err));
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.default.auth().signOut()
      .then(response => {
        this.token = null;
        this.router.navigateByUrl('/login');
      }).catch(err => console.log(err));
  }

}
