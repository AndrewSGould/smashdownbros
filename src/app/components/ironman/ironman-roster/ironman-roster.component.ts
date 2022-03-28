import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivePlayer } from 'src/app/data/player';
import { Fighter } from 'src/app/data/roster';
import { GameConfig } from 'src/app/models/gameconfig';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'sdb-ironman-roster',
  templateUrl: './ironman-roster.component.html',
  styleUrls: ['./ironman-roster.component.scss']
})
export class IronmanRosterComponent implements OnInit {

  constructor(
    private sdbService: DataService,
    private router: Router
  ) { }

  gameConfig: GameConfig = new GameConfig;
  activePlayers: Array<ActivePlayer> = [];
  currentPlayer: ActivePlayer = new ActivePlayer;
  //TODO: save fighter picks into local storage

  ngOnInit(): void {
    this.sdbService.gameConfig.subscribe(currentConfig => {
      this.gameConfig = currentConfig
    });

    this.sdbService.activePlayers.subscribe(players => {
      this.activePlayers = players;
    });

    if (this.activePlayers.length === 0) this.router.navigate(['/ironman']);

    this.currentPlayer = this.activePlayers[0];
  }

  updatePlayerRoster(fighter: any, currentPlayer: ActivePlayer) {
    let player = this.activePlayers.find(player => player == currentPlayer);

    if (!player) return console.error('No player found when updating their Ironman roster');

    if (!player.fighterPool) player.fighterPool = new Array<Fighter>();

    player.fighterPool.push(fighter);
  }

  submitRoster() {
    this.sdbService.updateActivePlayers(this.activePlayers);

    this.router.navigate(['ironman/matches'])
  }

  checkIfFighterSelectionsMade(): boolean {
    let allFightersSelected = true;

    this.activePlayers.forEach(player => {
      if (!player.fighterPool || player.fighterPool.length != this.gameConfig.maxRosterSize)
      allFightersSelected = false;
    });

    return allFightersSelected;
  }
}
