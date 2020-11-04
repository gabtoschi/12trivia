import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { GameComponent } from './components/game/game.component';
import { InstructionsComponent } from './components/instructions/instructions.component';


const routes: Routes = [
  { path: 'instructions', component: InstructionsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
