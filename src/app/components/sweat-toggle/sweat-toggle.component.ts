import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameConfig } from 'src/app/models/gameconfig';
import { DataService } from 'src/app/services/data.service';
import { SweatToggleDescriptorComponent } from './sweat-toggle-descriptor/sweat-toggle-descriptor.component';

@Component({
  selector: 'sdb-sweat-toggle',
  templateUrl: './sweat-toggle.component.html',
  styleUrls: ['./sweat-toggle.component.scss']
})
export class SweatToggleComponent implements OnInit {

  constructor(
    private sdbService: DataService, 
    public dialog: MatDialog) 
  { }

  sweatModeEnabled: boolean = false;
  gameConfig: GameConfig = new GameConfig;

  ngOnInit(): void {
    this.sdbService.gameConfig.subscribe(config => {
      this.gameConfig = config;
    })
  }

  toggleMode(toggle: boolean) {
    if (toggle) this.sweatModeEnabled = true;
    else this.sweatModeEnabled = false;

    this.gameConfig.spicyMode = this.sweatModeEnabled;
    this.sdbService.updateGameConfig(this.gameConfig);
  }

  openHelpDialog() {
    const dialogRef = this.dialog.open(SweatToggleDescriptorComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
