import { User } from './../model/user.model';
import { USER_DATA } from './../model/mocks';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  getData(): User[] {
    return USER_DATA;
  }
}
