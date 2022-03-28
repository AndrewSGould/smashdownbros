import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivePlayer } from 'src/app/data/player';
import { GameConfig } from 'src/app/models/gameconfig';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'sdb-ironman-config',
  templateUrl: './ironman-config.component.html',
  styleUrls: ['./ironman-config.component.scss']
})
export class IronmanConfigComponent implements OnInit {

  constructor(
    private router: Router,
    private sdbService: DataService
  ) { }

  stockCount: number = 3;
  rosterSize: number = 10;
  ironmanConfig: GameConfig = new GameConfig;
  playerOneName: string = '';
  playerTwoName: string = '';
  activePlayers: Array<ActivePlayer> = [];

  //TODO: configure amount of characters to play with (default 10)
  //TODO: 2 players, choose between all random or picked
  //TODO: all random will allow dupes
  //TODO: if random, this is where the fighter pools are selected
  //TODO: spicy mode
  

  ngOnInit(): void {
  }

  submitIronmanConfig() {
    this.ironmanConfig.stockCount = this.stockCount;
    this.ironmanConfig.maxRosterSize = this.rosterSize;

    //TODO: for now, assume a 2 player Iron man match
    let player1 = new ActivePlayer;
    player1.name = !this.playerOneName ? 'Player 1' : this.playerOneName;

    let player2 = new ActivePlayer;
    player2.name = !this.playerTwoName ? 'Player 2' : this.playerTwoName;

    this.activePlayers.push(player1);
    this.activePlayers.push(player2);

    this.sdbService.updateActivePlayers(this.activePlayers);
    this.sdbService.updateGameConfig(this.ironmanConfig);

    this.router.navigate(['ironman/pick-roster'])
  }
}
