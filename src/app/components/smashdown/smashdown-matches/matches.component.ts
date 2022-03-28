import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivePlayer, Match, Player, Record } from 'src/app/data/player';
import { Fighter, Roster } from 'src/app/data/roster';
import { GameConfig } from 'src/app/models/gameconfig';
import { DataService } from 'src/app/services/data.service';
import { MatchWinnerComponent } from '../../match-winner/match-winner.component';

@Component({
  selector: 'sdb-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class SmashdownMatchesComponent implements OnInit {

  constructor(
    private sdbService: DataService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  activePlayers: Array<ActivePlayer> = [];
  fighterPool: Array<Fighter> = Roster.Fighters;
  matchInProgress: boolean = false;
  crownWinner: boolean = false;
  matchesRemaining: number = 0;
  gameConfig: GameConfig = new GameConfig;
  playerRankings: Array<ActivePlayer> = [];

  ngOnInit(): void {
    this.sdbService.activePlayers.subscribe(activePlayers => {
      this.activePlayers = activePlayers;
    });

    if (this.activePlayers.length === 0)
      this.router.navigate(['/smashdown']);

    this.sdbService.rosterData.subscribe(response => {
      this.fighterPool = response;
    });

    this.sdbService.gameConfig.subscribe(config => {
      this.gameConfig = config;
    })

    this.matchesRemaining = Math.floor(this.fighterPool.length / this.activePlayers.length);
  }

  startMatch() {
    this.activePlayers.forEach(player => {
      player.currentFighter = this.fighterPool[this.fighterPool.length * Math.random() | 0];
      this.updateAvailableRoster();
    });

    this.matchInProgress = true;
  }

  finishMatch() {
    let dialogRef = this.dialog.open(MatchWinnerComponent, {
      data: {
        activePlayers: this.activePlayers,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateMatchHistory(result);
      this.matchInProgress = false;

      this.updateMatchesRemaining();
      this.checkForWinner();

      console.log(this.activePlayers);
      console.log(this.fighterPool);
    });
  }

  updateAvailableRoster() {
    this.activePlayers.forEach(player => {
      this.fighterPool = this.fighterPool.filter(fighter => fighter.id != player.currentFighter?.id);
    });
  }

  updateMatchesRemaining() {
    //TODO: for mercy rule, just asterik the matches remaining and explain it?
    this.matchesRemaining = Math.floor(this.fighterPool.length / this.activePlayers.length);
  }

  updateMatchHistory(result: any) {
    // if this is the first match, let's get a new match history
    this.activePlayers.forEach(player => {
      if(player.matchHistory === null || player.matchHistory === undefined)
        player.matchHistory = new Array<Match>();
    });

    // for now, there can only be one winner
    var newWinner = this.activePlayers.filter(player => player == result.winner)[0];
    var losers = this.activePlayers.filter(player => player != result.winner);

    newWinner.matchHistory!.push({
      opponents: losers, // for now, there can only be one winner
      fighter: newWinner.currentFighter!,
      win: true
    });

    this.updatePlayerRecord(newWinner, true);

    losers.forEach(loser => {
      var otherPlayers = this.activePlayers.filter(player => player != loser);

      loser.matchHistory!.push({
        opponents: otherPlayers,
        fighter: loser.currentFighter!,
        win: false
      });

      this.updatePlayerRecord(loser, false);
    });
  }
  
  checkForWinner() {
    if (this.gameConfig.mercyRule) {
      //TODO: do we want a notification when someone is in danger of losing
      // due to the mercy rule? currently the 'matches remaining' can be 
      // misleading with the mercy rule on
      if (this.getPlayerStanding(2).record!.totalWins + this.matchesRemaining 
              < this.getPlayerStanding(1).record!.totalWins)
        this.matchComplete(this.getPlayerStanding(1));
    }
    else {
      //TODO: what if it's a tie?
      //TODO: when adding mercy rule, refactor this
      if ((this.fighterPool.length / this.activePlayers.length) < 1) {
        let mostWinsCount = 0;
        let potentialWinner = new ActivePlayer;

        this.activePlayers.forEach(player => {
          let winCount = 0;

          player.matchHistory!.forEach(match => {
            if (match.win)
              winCount++;
          });

          if (mostWinsCount < winCount) {
            mostWinsCount = winCount;
            potentialWinner = player;
          }
        });
        
        this.matchComplete(potentialWinner);
      }
    }
  }

  matchComplete(winner: ActivePlayer) {
    alert(winner.name + ' wins!')
    this.crownWinner = true;
    this.matchesRemaining = 0;

    this.sdbService.updateActivePlayers(this.activePlayers);
  }

  getPlayerStanding(placement: number) {
    var playerRankings = this.activePlayers.slice()
                        .sort((a, b) => (b.record!.totalWins - a.record!.totalWins));
    return playerRankings[placement - 1];
  }

  private updatePlayerRecord(player: ActivePlayer, playerWon: boolean) {
    if (player.record === undefined)
      player.record = new Record;

    if(playerWon)
      player.record.totalWins++;
    else
      player.record.totalLosses++;
  }
}
