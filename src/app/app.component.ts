import { Component, OnInit } from '@angular/core';
import { IRoster, fighters } from './data/fighter'

@Component({
  selector: 'sdb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'SmashdownBros';
  roster: IRoster = { fighters };
}
