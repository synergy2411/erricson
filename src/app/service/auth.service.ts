import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn : 'root'
})
export class AuthService {

  private token: string = null;

  register(email: string, password: string) {
    firebase.default.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
      }).catch(err => console.log(err));
  }

  login(email: string, password: string){
    firebase.default.auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        firebase.default.auth().currentUser.getIdToken()
          .then(token => {
            console.log(token);
            this.token = token;
          });
      }).catch(err => console.log(err));
  }

  getToken(){
    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }

  logout() {
    firebase.default.auth().signOut()
      .then(response => {
        this.token = null;
      }).catch(err => console.log(err));
  }

}
