import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmashdownConfigComponent } from './components/smashdown/smashdown-config/smashdown-config.component';
import { IronmanComponent } from './components/ironman/ironman.component';
import { SmashdownMatchesComponent } from './components/smashdown/smashdown-matches/matches.component';
import { LandingComponent } from './components/landing/landing.component';
import { RosterSelectorComponent } from './components/roster-selector/roster-selector.component';
import { SmashdownComponent } from './components/smashdown/smashdown.component';
import { SweatToggleComponent } from './components/sweat-toggle/sweat-toggle.component';
import { IronmanConfigComponent } from './components/ironman/ironman-config/ironman-config.component';
import { IronmanMatchComponent } from './components/ironman/ironman-match/ironman-match.component';
import { RosterSelectComponent } from './components/roster-select/roster-select.component';
import { IronmanRosterComponent } from './components/ironman/ironman-roster/ironman-roster.component';

const routes: Routes = [
  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'smashdown', component: SmashdownComponent,
    children: [
      { path: '', component: RosterSelectorComponent },
      { path: 'game-config', component: SmashdownConfigComponent},
      { path: 'matches', component: SmashdownMatchesComponent },
      { path: 'sweat-toggle', component: SweatToggleComponent}
    ] 
  },
  { path: 'ironman', component: IronmanComponent,
    children: [
      { path: '', component: IronmanConfigComponent },
      { path: 'pick-roster', component: IronmanRosterComponent },
      { path: 'matches', component: IronmanMatchComponent }
    ] 
  },
  { path: '**', component: LandingComponent } //TODO: add pagenotfound
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
