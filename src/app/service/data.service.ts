import { User } from './../model/user.model';
import { USER_DATA } from './../model/mocks';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class DataService {
  counter = 0;
  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  getData() {
    // XHR Call
    return this.httpClient.get('/assets/model/user.json').pipe(
      map((response: Response) => {
        return response['users'];
      })
    );
  }

  getRestData() {
    return this.httpClient.get('https://ng-proj-39b77.firebaseio.com/users.json?auth=' + this.authService.getToken());
  }

}
