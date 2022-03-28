import { Component, OnInit } from '@angular/core';
import { Fighter, Roster } from './data/roster'

@Component({
  selector: 'sdb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'SmashdownBros';
}

//TODO: https://github.com/AndrewSGould/smashdownbros/settings Update Social Preview image
//TODO: https://github.com/AndrewSGould/smashdownbros/community Review community standards
//TODO: https://github.com/AndrewSGould/smashdownbros/projects?type=beta Review projects. Maybe a way to organize work?
