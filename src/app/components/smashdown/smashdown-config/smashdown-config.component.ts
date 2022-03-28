import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/data/player';
import { Fighter } from 'src/app/data/roster';
import { GameConfig } from 'src/app/models/gameconfig';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'sdb-game-config',
  templateUrl: './smashdown-config.component.html',
  styleUrls: ['./smashdown-config.component.scss']
})
export class SmashdownConfigComponent implements OnInit {

  constructor(private sdbService: DataService) { }

  playerNumberCount: number = 0;
  playerList: Array<Player> = [];
  playerCount: number = 0;
  excludedFighters: Array<Fighter> = [];
  mercyIsChecked: boolean = false;
  gameConfig: GameConfig = new GameConfig;

  //TODO: spicy mode

  ngOnInit(): void {
    this.sdbService.gameConfig.subscribe(config => {
      this.gameConfig = config;
    })

    this.sdbService.excludedFighters.subscribe(response => {
      this.excludedFighters = response;
    });
  }

  //TODO: can i just make this a form?

  generatePlayerList() {
    // if selected multiple times, lets clear our existing array and start over
    this.playerList = new Array<Player>();

    for (var i=0; i < this.playerCount; i++) {
      this.playerList.push(new Player);
    }
  }

  submitPlayerList() {
    this.playerList.forEach((player, i) => {
      if (!player.name) player.name = `Player ${i+1}`
    });

    this.sdbService.updateActivePlayers(this.playerList);
    //TODO: other error handling stuff
  }

  bindPlayerName(event: any, index: number) {
    var input = event as HTMLInputElement;
    this.playerList[index].name = input.value;
  }

  mercyClicked() {
    this.mercyIsChecked = !this.mercyIsChecked;
    this.gameConfig.mercyRule = this.mercyIsChecked;
    this.sdbService.updateGameConfig(this.gameConfig);
  }
}
