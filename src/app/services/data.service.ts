import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from '../data/player';
import { Fighter } from '../data/roster';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource: BehaviorSubject<Array<Fighter>> = new BehaviorSubject<Array<Fighter>>(new Array<Fighter>());
  excludedFighters: Observable<Array<Fighter>> = this.dataSource.asObservable();

  private playersDatasource: BehaviorSubject<Array<Player>> = new BehaviorSubject<Array<Player>>(new Array<Player>());
  players: Observable<Array<Player>> = this.playersDatasource.asObservable();
 
  constructor() { }
 
  updateExcludedFighters(excludedFighterData: Array<Fighter>) {
    this.dataSource.next(excludedFighterData);
  }

  updatePlayerList(players: Array<Player>) {
    this.playersDatasource.next(players);
  }
}
