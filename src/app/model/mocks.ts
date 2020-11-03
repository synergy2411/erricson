import { User } from './user.model';

export const USER_DATA: User[]  = [{
  firstName : 'Bill',
  lastName : 'Gates',
  dob : new Date('Dec 21, 1965'),
  income : 50000,
  company : 'Microsoft',
  isWorking : true,
  image : 'assets/images/bill.jpg',
  votes : 120
},{
  firstName : 'Steve',
  lastName : 'Jobs',
  dob : new Date('Aug 1, 1965'),
  income : 0,
  company : 'Apple',
  isWorking : false,
  image : 'assets/images/steve.jpg',
  votes : 100
},{
  firstName : 'Tim B.',
  lastName : 'Lee',
  dob : new Date('Jan 5, 1965'),
  income : 40000,
  company : 'World Wide Web',
  isWorking : true,
  image : 'assets/images/tim.jpg',
  votes : 180
}];
