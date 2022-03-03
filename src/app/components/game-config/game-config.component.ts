import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/data/player';
import { Fighter } from 'src/app/data/roster';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'sdb-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.scss']
})
export class GameConfigComponent implements OnInit {

  constructor(private sdbService: DataService) { }

  playerNumberCount: number = 0;
  playerList: Array<Player> = [];
  playerCount: number = 0;
  excludedFighters: Array<Fighter> = [];

  ngOnInit(): void {
    this.sdbService.excludedFighters.subscribe(response => {
      this.excludedFighters = response;
    });
  }

  generatePlayerList() {
    // if selected multiple times, lets clear our existing array and start over
    this.playerList = new Array<Player>();

    for (var i=0; i < this.playerCount; i++) {
      this.playerList.push(new Player);
    }
  }

  submitPlayerList() {
    this.sdbService.updatePlayerList(this.playerList);
  }

  bindPlayerName(event: any, index: number) {
    var input = event as HTMLInputElement;
    this.playerList[index].name = input.value;
  }
}
