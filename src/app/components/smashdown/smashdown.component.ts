import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/data/player';
import { Fighter, Roster } from 'src/app/data/roster';

@Component({
  selector: 'sdb-smashdown',
  templateUrl: './smashdown.component.html',
  styleUrls: ['./smashdown.component.scss']
})
export class SmashdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = 'SmashdownBros';
  Roster: Roster = Roster;  
}
