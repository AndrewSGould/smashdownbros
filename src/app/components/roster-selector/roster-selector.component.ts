import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Fighter, Roster } from 'src/app/data/roster';
import { DataService } from 'src/app/services/data.service';
import Utils from 'src/app/shared/utils';

@Component({
  selector: 'sdb-roster-selector',
  templateUrl: './roster-selector.component.html',
  styleUrls: ['./roster-selector.component.scss']
})
export class RosterSelectorComponent implements OnInit {

  constructor(private sdbService: DataService) { }

  disabledFighters: Array<Fighter> = [];
  Roster: Roster = Roster;
  fighters: Fighter[] = [];

  ngOnInit(): void {
    this.fighters = Roster.Fighters;
    this.sdbService.updateCurrentRoster(this.fighters);
  }

  excludeFighter(fighterId: number) {
    if (Utils.isFighterDisabled(this.disabledFighters, fighterId))
      this.disabledFighters = this.disabledFighters.filter(fighter => fighter.id !== fighterId);
    else
      this.disabledFighters.push(Roster.fighterLookup(fighterId));  

    this.fighters = Roster.Fighters.filter(fighter => !this.disabledFighters.includes(fighter));
    this.sdbService.updateCurrentRoster(this.fighters);
    this.sdbService.updateExcludedFighters(this.disabledFighters);
  }
  
  isDisabledFighter(fighterId: number) {
    return this.disabledFighters.find(fighter => fighter.id === fighterId);
  }

  excludeHalf() {
    var halfCount = this.fighters.length / 2;
    var trackHalf = 1;

    this.fighters.forEach(fighter => {
      if (trackHalf > halfCount) return; 
      
      var randomFighterId = this.fighters.length * Math.random() | 0;

      this.excludeFighter(this.fighters[randomFighterId].id);
      trackHalf++;
    });
  }
}
