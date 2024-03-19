import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input()  msgfromParent !: string ;
@Input()  msgfromMother !: string;
@Output() msgFromChild : EventEmitter<string> = new EventEmitter<string>();
@Output() msgFromBaby : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.msgFromChild.emit(`I will do this time definetly...`)
    this.msgFromBaby.emit(`Hello mummy....`)
  }

}
