import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberIndicatorComponent } from './components/number-indicator/number-indicator.component';
import { TriviaCardComponent } from './components/trivia-card/trivia-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NumberIndicatorComponent,
    TriviaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
