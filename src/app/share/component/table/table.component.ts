import { Component, OnInit } from '@angular/core';
import { Iplayers } from '../../model/players';
import { Players } from '../../const/players';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
SearchbyValue !: string ;
playersArray :  Array<Iplayers> = Players;
  constructor() { }

  ngOnInit(): void {
  }

}
