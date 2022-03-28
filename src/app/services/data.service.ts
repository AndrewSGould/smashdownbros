import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player, ActivePlayer } from '../data/player';
import { Fighter } from '../data/roster';
import { GameConfig } from '../models/gameconfig';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private rosterDataSource: BehaviorSubject<Array<Fighter>> = new BehaviorSubject<Array<Fighter>>(new Array<Fighter>());
  rosterData: Observable<Array<Fighter>> = this.rosterDataSource.asObservable();

  private dataSource: BehaviorSubject<Array<Fighter>> = new BehaviorSubject<Array<Fighter>>(new Array<Fighter>());
  excludedFighters: Observable<Array<Fighter>> = this.dataSource.asObservable();

  private activePlayersDatasource: BehaviorSubject<Array<ActivePlayer>> = 
    new BehaviorSubject<Array<ActivePlayer>>(new Array<ActivePlayer>());
  activePlayers: Observable<Array<ActivePlayer>> = this.activePlayersDatasource.asObservable();

  private gameConfigData: BehaviorSubject<GameConfig> = new BehaviorSubject<GameConfig>(new GameConfig);
  gameConfig: Observable<GameConfig> = this.gameConfigData.asObservable();

  constructor() { }
 
  updateExcludedFighters(excludedFighterData: Array<Fighter>) {
    this.dataSource.next(excludedFighterData);
  }

  updateCurrentRoster(rosterData: Array<Fighter>) {
    this.rosterDataSource.next(rosterData);
  }

  updateActivePlayers(activePlayers: Array<ActivePlayer>) {
    this.activePlayersDatasource.next(activePlayers);
  }

  updateGameConfig(gameConfig: GameConfig) {
    this.gameConfigData.next(gameConfig);
  }

  //TODO: change all of this to be a 'game config'?
}
