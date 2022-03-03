import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/data/player';
import { Roster } from 'src/app/data/roster';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'sdb-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  constructor(private sdbService: DataService) { }

  activePlayers: Array<Player> = [];
  Roster: Roster = Roster;

  ngOnInit(): void {
    this.sdbService.players.subscribe(response => {
      this.activePlayers = response;
    });
  }

  randomFighter(): number {
    return Math.floor(Math.random() * Roster.Fighters.length);
  }
}
