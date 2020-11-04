import { Injectable } from "@angular/core";
import * as firebase from 'firebase';

@Injectable({
  providedIn : 'root'
})
export class AuthService {

  register(email: string, password: string) {
    firebase.default.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
      }).catch(err => console.log(err));
  }
}
