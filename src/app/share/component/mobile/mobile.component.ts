import { Component, OnInit } from '@angular/core';
import { mobileProducts } from '../../const/mobile';
import { Imobile } from '../../model/mobInter';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
mobileArray : Array<Imobile> = [];
  constructor() { }

  ngOnInit(): void {

    this.mobileArray =  mobileProducts;
    console.log(this.mobileArray);
     
 }
}
