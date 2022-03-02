import { Component, OnInit } from '@angular/core';
import { Fighter, Roster } from './data/roster'

@Component({
  selector: 'sdb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'SmashdownBros';

  smashdownStart() {
    // list characters that will be excluded in the smash down
    // OR
    // 'no characters have been exempted' (restart button)

    // how many players will be participating?
    // on selection, show that many inputs for names
    // TODO: on this configuration screen, rotate random smash art for background?
    // Smash! button at the bottom starts the game
  }
}

//TODO: https://github.com/AndrewSGould/smashdownbros/settings Update Social Preview image
//TODO: https://github.com/AndrewSGould/smashdownbros/community Review community standards
//TODO: https://github.com/AndrewSGould/smashdownbros/projects?type=beta Review projects. Maybe a way to organize work?

// start the smash down
//   start it with only the available pool
// allow amount of players selection
// allow name entry