import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
  // providers : [DataService]
})
export class PipeDemoComponent {
  data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Here the data comes');
    }, 3000);
  });
  todos = [{
    label: 'Pot the plant',
    status : 'pending'
  }, {
    label: 'read the book',
    status : 'done'
  }, {
    label: 'buy the pulses',
    status : 'pending'
  }, {
    label: 'renew the insurance',
    status : 'done'
  }];

  contactNo = 987654321;

  filteredStatus = '';

  constructor(public dataService: DataService) {}

  onIncrease() {
    this.dataService.counter++;
  }

  onAddNewItem() {
    this.todos.push({label : 'New Item', status : 'pending'});
  }



}
