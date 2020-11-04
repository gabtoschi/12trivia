import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberIndicatorComponent } from './components/number-indicator/number-indicator.component';
import { TriviaCardComponent } from './components/trivia-card/trivia-card.component';
import { GameComponent } from './components/game/game.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NumberIndicatorComponent,
    TriviaCardComponent,
    GameComponent,
    InstructionsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
