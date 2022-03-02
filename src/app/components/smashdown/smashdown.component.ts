import { Component, OnInit } from '@angular/core';
import { Fighter, Roster } from 'src/app/data/roster';

@Component({
  selector: 'sdb-smashdown',
  templateUrl: './smashdown.component.html',
  styleUrls: ['./smashdown.component.scss']
})
export class SmashdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = 'SmashdownBros';
  Roster: Roster = Roster;
  disabledFighters: Array<Fighter> = [];
  playerCount: number = 0;
  playerConfigView: boolean = false;

  excludeFighter(fighterId: number) {
    if (this.disabledFighters.find(fighter => fighter.id === fighterId))
      this.disabledFighters = this.disabledFighters.filter(fighter => fighter.id !== fighterId);
    else
      this.disabledFighters.push(Roster.fighterLookup(fighterId));  
  }

  disableFighter(fighterId: number) {
    return this.disabledFighters.find(fighter => fighter.id === fighterId);
  }
}
