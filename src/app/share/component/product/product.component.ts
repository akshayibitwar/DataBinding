import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
public bgColor : string = "hotpink";
isProdctAvbl : boolean = false;
ProdctName : string = 'Apple';
ProdctId : number = 10;
@Input() msgFromProduct !: string;
  constructor() { }

  ngOnInit(): void {
    this.isProdctAvbl = Math.random() >= .5 ? true : false;
  }

}
