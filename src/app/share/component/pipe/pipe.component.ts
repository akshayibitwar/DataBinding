import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
name = "Hellow";
Pipetitle =  `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ad ut consectetur itaque porro iste nemo magnam, architecto blanditiis? Ex earum harum voluptate totam repudiandae necessitatibus aperiam itaque officia repellat?`

Stddata = {
  profile : "Front End Developer",
  name : "akshay",
  fname : "Ibitwar",
  CTC : 5.5210,
  currency : "INR",
  realDate : new Date(2023, 4, 15)
}
  constructor() { }

  ngOnInit(): void {
  }

}
