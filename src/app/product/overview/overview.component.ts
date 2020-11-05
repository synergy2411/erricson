import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  description = null;

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.queryParams);
    this.route.queryParams.subscribe(params => {
      this.description = params['description'];
    })
   }

  ngOnInit() {
  }

}
