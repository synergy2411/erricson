import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: "app-life-cycle-demo",
  templateUrl: "./life-cycle-demo.component.html",
  styleUrls: ["./life-cycle-demo.component.css"],
})
export class LifeCycleDemoComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

      @Input() appName: string;

  constructor() {}

  ngOnChanges(change : SimpleChanges) {
    console.log("ngOnChanges", change);
  }
  ngOnInit() { console.log("ngOnInit")  }
  ngDoCheck() { console.log("ngDoCheck") }
  ngAfterContentInit() { console.log("ngAfterContentInit") }
  ngAfterContentChecked() { console.log("ngAfterContentChecked") }
  ngAfterViewInit() { console.log("ngAfterViewInit") }
  ngAfterViewChecked() { console.log("ngAfterViewChecked") }
  ngOnDestroy() { console.log("ngOnDestroy") }
}
