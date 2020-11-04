import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {

  observableData = new Observable((observer) => {
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
      observer.error(new Error('Something bad happened'));
    }, 6000);
    setTimeout(() => {
      observer.complete();
    }, 7000);
  });

  unSub: Subscription;
  packages: string[] = [];

  onSubscribe() {
    this.unSub = this.observableData.subscribe(
      (value: string) => {
        // console.log(value);
        this.packages.push(value);
      },
      (err) => {console.log(err)},
      () => {console.log('COMPLETED')}
    )
  }

  onUnsubscribe() {
    this.unSub.unsubscribe();
  }

}
