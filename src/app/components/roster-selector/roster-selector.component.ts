import { Component, OnInit } from '@angular/core';
import { Fighter, Roster } from 'src/app/data/roster';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'sdb-roster-selector',
  templateUrl: './roster-selector.component.html',
  styleUrls: ['./roster-selector.component.scss']
})
export class RosterSelectorComponent implements OnInit {

  constructor(private sdbService: DataService) { }

  disabledFighters: Array<Fighter> = [];
  Roster: Roster = Roster;

  ngOnInit(): void {
  }

  excludeFighter(fighterId: number) {
    if (this.disabledFighters.find(fighter => fighter.id === fighterId))
      this.disabledFighters = this.disabledFighters.filter(fighter => fighter.id !== fighterId);
    else
      this.disabledFighters.push(Roster.fighterLookup(fighterId));  

    this.sdbService.updateExcludedFighters(this.disabledFighters);
  }

  disableFighter(fighterId: number) {
    return this.disabledFighters.find(fighter => fighter.id === fighterId);
  }

}
