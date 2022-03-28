import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sdb-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  //TODO: have an icon or banner to allow user to quickly go back to home

  constructor() { }

  ngOnInit(): void {
  }

}
