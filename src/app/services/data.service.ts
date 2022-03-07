import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from '../data/player';
import { Fighter } from '../data/roster';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private rosterDataSource: BehaviorSubject<Array<Fighter>> = new BehaviorSubject<Array<Fighter>>(new Array<Fighter>());
  rosterData: Observable<Array<Fighter>> = this.rosterDataSource.asObservable();

  private dataSource: BehaviorSubject<Array<Fighter>> = new BehaviorSubject<Array<Fighter>>(new Array<Fighter>());
  excludedFighters: Observable<Array<Fighter>> = this.dataSource.asObservable();

  private playersDatasource: BehaviorSubject<Array<Player>> = new BehaviorSubject<Array<Player>>(new Array<Player>());
  players: Observable<Array<Player>> = this.playersDatasource.asObservable();
 
  constructor() { }
 
  updateExcludedFighters(excludedFighterData: Array<Fighter>) {
    this.dataSource.next(excludedFighterData);
  }

  updateCurrentRoster(rosterData: Array<Fighter>) {
    this.rosterDataSource.next(rosterData);
  }

  updatePlayerList(players: Array<Player>) {
    this.playersDatasource.next(players);
  }
}
