import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { GameComponent } from './components/game/game.component';
import { InstructionsComponent } from './components/instructions/instructions.component';


const routes: Routes = [
  { path: 'instructions', component: InstructionsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'play', component: GameComponent },
  { path: '', redirectTo: '/play', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
