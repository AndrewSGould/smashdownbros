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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RosterSelectorComponent } from './components/roster-selector/roster-selector.component';
import { SmashdownConfigComponent } from './components/smashdown/smashdown-config/smashdown-config.component';
import { SmashdownMatchesComponent } from './components/smashdown/smashdown-matches/matches.component';
import { SweatToggleComponent } from './components/sweat-toggle/sweat-toggle.component';
import { PlayersPickComponent } from './components/players-pick/players-pick.component';
import { MatchWinnerComponent } from './components/match-winner/match-winner.component';
import { SweatToggleDescriptorComponent } from './components/sweat-toggle/sweat-toggle-descriptor/sweat-toggle-descriptor.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { IronmanComponent } from './components/ironman/ironman.component';
import { IronmanConfigComponent } from './components/ironman/ironman-config/ironman-config.component';
import { IronmanMatchComponent } from './components/ironman/ironman-match/ironman-match.component';
import { RosterSelectComponent } from './components/roster-select/roster-select.component';
import { IronmanRosterComponent } from './components/ironman/ironman-roster/ironman-roster.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FighterComponent,
    SmashdownComponent,
    LandingComponent,
    RosterSelectComponent,
    RosterSelectorComponent,
    SmashdownConfigComponent,
    SmashdownMatchesComponent,
    SweatToggleComponent,
    PlayersPickComponent,
    MatchWinnerComponent,
    SweatToggleDescriptorComponent,
    ReversePipe,
    IronmanComponent,
    IronmanConfigComponent,
    IronmanMatchComponent,
    IronmanRosterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
