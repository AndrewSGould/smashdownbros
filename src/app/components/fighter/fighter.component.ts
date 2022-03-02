import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sdb-fighter',
  templateUrl: './fighter.component.html',
  styleUrls: ['./fighter.component.scss']
})
export class FighterComponent implements OnInit {

  constructor() { }

  @Input() portrait: string = '';

  ngOnInit(): void {
  }

}
