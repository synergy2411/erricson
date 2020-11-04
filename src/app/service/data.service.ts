import { User } from './../model/user.model';
import { USER_DATA } from './../model/mocks';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  counter = 0;
  constructor(private httpClient: HttpClient) {}

  getData(){
    // XHR Call
    return this.httpClient.get('/assets/model/user.json')
              .pipe(map(response => response['users']));
  }
}
