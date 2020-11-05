import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id = null;
  prodName = null;
  constructor(private route: ActivatedRoute) {
    // console.log(this.route.snapshot.params);
    // Synchronous
    this.id = +this.route.snapshot.params['id'];
    // Asynchronous
    this.route.params.subscribe(params => {
      this.prodName = params['prod_name'];
    })
    // this.prodName = this.route.snapshot.params['prod_name'];
  }

  ngOnInit() {
  }

}
