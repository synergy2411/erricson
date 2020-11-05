import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';


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

  constructor(private http: HttpClient) {}

  makeRemoteCall() {
    const data$ = of(1, 2, 3, 4, 5);
    // debugger;
    data$.pipe(tap(v => console.log('TAP 1 :', v)))
      .pipe(map(value => value * 2))
      .pipe(tap(val => console.log('TAP 2', val)))
      .subscribe(response => console.log('SUBS : ', response));


    // this.http.get('http://date.jsontest.com')
    //   .pipe(tap((response) => {
    //     console.log('TAP : ', response);
    //   })).subscribe(result => {
    //     console.log('SUBS : ', result);
    //   });
  }

  onSubscribe() {
    this.unSub = this.observableData.subscribe(
      (value: string) => {
        // console.log(value);
        this.packages.push(value);
      },
      (err) => {console.log(err); },
      () => {console.log('COMPLETED'); }
    );
  }

  onUnsubscribe() {
    this.unSub.unsubscribe();
  }

}
