import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameConfigComponent } from './components/game-config/game-config.component';
import { LandingComponent } from './components/landing/landing.component';
import { MatchesComponent } from './components/matches/matches.component';
import { RosterSelectorComponent } from './components/roster-selector/roster-selector.component';
import { SmashdownComponent } from './components/smashdown/smashdown.component';
import { SweatToggleComponent } from './components/sweat-toggle/sweat-toggle.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'smashdown', component: SmashdownComponent,
    children: [
      { path: 'roster-edit', component: RosterSelectorComponent},
      { path: 'game-config', component: GameConfigComponent},
      { path: 'matches', component: MatchesComponent },
      { path: 'sweat-toggle', component: SweatToggleComponent},
      { path: '', redirectTo: 'roster-edit', pathMatch: 'full' }
    ] 
  },
  
  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent } //TODO: add pagenotfound
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
