import { Component } from '@angular/core';
import { Istd } from './share/model/mobInter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DataBinding';
  msgtoChild : string = "You will be winner..";
  msgtoBaby : string = 'How are you my son';
  msgtoProduct : string = "Hellow Moto....";
  msgFromChild !: string;
  msgFromBaby !: string;
  stdInfo : Istd = 
  {
    fname : 'Akshay',
    lname : 'Ibitwar',
    email : 'akibtwar@gmail.com',
    contact : 8657954717
  };

  getMsgfromChild(eve : string){
    console.log(eve);
    this.msgFromChild = eve;
  }

  getmsgfromBaby(eve : string){
    console.log(eve);
    this.msgFromBaby = eve;
    
  }
}
