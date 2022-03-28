import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Fighter, Roster } from 'src/app/data/roster';
import { DataService } from 'src/app/services/data.service';
import Utils from 'src/app/shared/utils';
import { EventEmitter } from '@angular/core';
import { ActivePlayer } from 'src/app/data/player';

@Component({
  selector: 'sdb-roster-select',
  templateUrl: './roster-select.component.html',
  styleUrls: ['./roster-select.component.scss']
})
export class RosterSelectComponent implements OnChanges {

  constructor(private sdbService: DataService) { }

  @Input('fighter-limit') fighterLimit?: number = undefined;
  @Input('preselect-list') preselectedFighters: Array<Fighter> | undefined = [];
  @Output() fighterAdded: EventEmitter<Fighter> = new EventEmitter();

  selectedFighters: Array<Fighter> = [];
  Roster: Roster = Roster;
  fighters: Array<Fighter> = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (!!this.preselectedFighters)
      this.selectedFighters = this.preselectedFighters;
  }

  fighterSelected(fighter: Fighter) {
    if(this.selectedFighters.includes(fighter)) {
      this.selectedFighters.splice(this.selectedFighters.indexOf(fighter), 1);
      return;
    }
    
    if (this.fighterLimit && this.selectedFighters.length >= this.fighterLimit)
      return alert('Max roster size reached! Please unselect another character if you\'d like to switch')

    this.fighterAdded.emit(fighter);
  }

  isSelectedFighter(fighterId: number) {
    return this.selectedFighters.find(fighter => fighter.id === fighterId);
  }
}
