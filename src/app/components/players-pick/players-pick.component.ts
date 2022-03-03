import { AfterContentInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivePlayer } from 'src/app/data/player';
import { Fighter, Roster } from 'src/app/data/roster';

@Component({
  selector: 'sdb-players-pick',
  templateUrl: './players-pick.component.html',
  styleUrls: ['./players-pick.component.scss']
})
export class PlayersPickComponent {

  constructor() { }

  @Input() activePlayer: ActivePlayer = new ActivePlayer;

  ngOnChanges() {

  }
}
