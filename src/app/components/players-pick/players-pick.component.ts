import { Component, Input, OnInit } from '@angular/core';
import { Fighter, Roster } from 'src/app/data/roster';

@Component({
  selector: 'sdb-players-pick',
  templateUrl: './players-pick.component.html',
  styleUrls: ['./players-pick.component.scss']
})
export class PlayersPickComponent implements OnInit {

  constructor() { }

  @Input() playerName: string = '';
  @Input() fighterId: number = 0;
  pickedFighter: Fighter = new Fighter;
  Roster: Roster = Roster;

  ngOnInit(): void {
    this.pickedFighter = Roster.fighterLookup(this.fighterId);
  }
}
