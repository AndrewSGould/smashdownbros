import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SmashdownComponent } from './components/smashdown/smashdown.component';

const routes: Routes = [
  { path: 'smashdown', component: SmashdownComponent },
  { path: 'landing', component: LandingComponent },
  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent } //TODO: add pagenotfound
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
