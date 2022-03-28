import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivePlayer } from 'src/app/data/player';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'sdb-ironman-match',
  templateUrl: './ironman-match.component.html',
  styleUrls: ['./ironman-match.component.scss']
})
export class IronmanMatchComponent implements OnInit {

  //TODO: display roster vs roster
  //TODO: Track overall stock count from match to match
  //TODO: allow loser only to pick the next fighter - the matchup uses the winners previous fighter
  //TODO: when the loser is picking, display the opponents fighter with remaining stock count
  //TODO: Track character kills, and overall score (for example, sheik kill 3 sonics, 2 daisys)
      // sheik will display 3 sonic icons, 2 daisy icons, and a green +2 next to the history
      // another example is sheik only killed 1 cloud. it will display one cloud icon, and a red -2)

  //TODO: when reporting the winner, input leftover stock count
      // this control will show the max stock count (from the config)
      // as you hover over 1 of the stock icons, the ones after it will be disabled
      // clicking on the stock will record it's position
      // example, in a 3 stock game, when reporting the winner:
          // toggle to pick who has won
          // stock selector control. if character has 2 stock remaining, user will click on the second stock
          // to report the leftover amount

  constructor(
    private sdbService: DataService,
    private router: Router
  ) { }

  activePlayers: Array<ActivePlayer> = [];

  ngOnInit(): void {
    this.sdbService.activePlayers.subscribe(activePlayers => {
      this.activePlayers = activePlayers;
    });

    if (this.activePlayers.length === 0) this.router.navigate(['/ironman']);
    //TODO: if activeplayers dont have a fighter pool, generate it now
  }

}
