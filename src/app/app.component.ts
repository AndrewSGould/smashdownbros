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

//TODO: https://github.com/AndrewSGould/smashdownbros/settings Update Social Preview image
//TODO: https://github.com/AndrewSGould/smashdownbros/community Review community standards
//TODO: https://github.com/AndrewSGould/smashdownbros/projects?type=beta Review projects. Maybe a way to organize work?