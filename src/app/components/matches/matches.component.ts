import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivePlayer, Match } from 'src/app/data/player';
import { Fighter, Roster } from 'src/app/data/roster';
import { DataService } from 'src/app/services/data.service';
import { MatchWinnerComponent } from '../match-winner/match-winner.component';

@Component({
  selector: 'sdb-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  constructor(
    private sdbService: DataService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  activePlayers: Array<ActivePlayer> = [];
  fighterPool: Array<Fighter> = Roster.Fighters;
  matchInProgress: boolean = false;
  crownWinner: boolean = false;

  ngOnInit(): void {
    this.sdbService.players.subscribe(response => {
      this.activePlayers = new Array<ActivePlayer>();
      this.activePlayers = response;
    });

    if (this.activePlayers.length === 0)
      this.router.navigate(['/smashdown']);

    this.sdbService.rosterData.subscribe(response => {
      this.fighterPool = response;
    });
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

      this.checkForWinner();
    });
  }

  updateAvailableRoster() {
    this.activePlayers.forEach(player => {
      this.fighterPool = this.fighterPool.filter(fighter => fighter.id != player.currentFighter?.id);
    });
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

    losers.forEach(loser => {
      var otherPlayers = this.activePlayers.filter(player => player != loser);

      loser.matchHistory!.push({
        opponents: otherPlayers,
        fighter: loser.currentFighter!,
        win: false
      });
    });
  }

  checkForWinner() {
    //if (this.mercyRule)
      // count the number of matches that have happened
      // count the number of matches yet to be played
        // leftover fighterPool.length / activePlayers.length
      // if second place wins + leftover matches < current winners win count then end the game
    //else 
      // if fighterpool.length / activeplayers.length > 0

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
      
      alert(potentialWinner.name + ' wins!')
      this.crownWinner = true;
    }
  }
}
