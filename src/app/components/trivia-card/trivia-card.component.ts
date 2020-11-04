import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NumberTrivia, NumberTriviaStatus } from '@models';


@Component({
  selector: 'app-trivia-card',
  templateUrl: './trivia-card.component.html',
  styleUrls: ['./trivia-card.component.scss']
})
export class TriviaCardComponent {

  @Input() trivia: NumberTrivia;
  @Output() chosenCard = new EventEmitter<string>();

  readonly status = NumberTriviaStatus;

  clickCard() {
    if (this.trivia.status === this.status.RIGHT || this.trivia.status === this.status.WRONG) {
      return;
    }

    this.chosenCard.emit(this.trivia.num);
  }
}
