import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FighterComponent } from './components/fighter/fighter.component';
import { SmashdownComponent } from './components/smashdown/smashdown.component';
import { LandingComponent } from './components/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { RosterSelectorComponent } from './components/roster-selector/roster-selector.component';
import { GameConfigComponent } from './components/game-config/game-config.component';
import { MatchesComponent } from './components/matches/matches.component';
import { SweatToggleComponent } from './components/sweat-toggle/sweat-toggle.component';
import { PlayersPickComponent } from './components/players-pick/players-pick.component';
import { MatchWinnerComponent } from './components/match-winner/match-winner.component';

@NgModule({
  declarations: [
    AppComponent,
    FighterComponent,
    SmashdownComponent,
    LandingComponent,
    RosterSelectorComponent,
    GameConfigComponent,
    MatchesComponent,
    SweatToggleComponent,
    PlayersPickComponent,
    MatchWinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
