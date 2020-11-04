import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {

  observableData = Observable.create((observer) => {
    setTimeout(() => {
      observer.next('First Package');
    }, 1000);
    setTimeout(() => {
      observer.next('Second Package');
    }, 3000);
    setTimeout(() => {
      observer.next('Third Package');
    }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 7000);
  });

  unSub: Subscription;

  onSubscribe() {
    this.unSub = this.observableData.subscribe(
      (value) => {console.log(value)},
      (err) => {console.log(err)},
      () => {console.log('COMPLETED')}
    )
  }

  onUnsubscribe() {
    this.unSub.unsubscribe();
  }

}
