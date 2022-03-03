import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivePlayer } from 'src/app/data/player';

@Component({
  selector: 'sdb-match-winner',
  templateUrl: './match-winner.component.html',
  styleUrls: ['./match-winner.component.scss']
})
export class MatchWinnerComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MatchWinnerComponent>
  ) { }

  ngOnInit(): void {
    
  }

  selectWinner(winner: ActivePlayer) {
    this.dialogRef.close({
      winner:winner
    });
  }
}
