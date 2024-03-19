import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../model/mobInter';

@Component({
  selector: 'app-std',
  templateUrl: './std.component.html',
  styleUrls: ['./std.component.scss']
})
export class StdComponent implements OnInit {
@Input()  getstdInfo !: Istd;
  constructor() { }

  ngOnInit(): void {
  }

}
