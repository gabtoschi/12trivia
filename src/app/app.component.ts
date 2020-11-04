import { Component, OnInit } from '@angular/core';

import { NumberTrivia, NumberTriviaStatus } from '@models';
import { shuffleArray } from '@utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentTrivia = 0;

  allTrivia: NumberTrivia[] = [
    { num: '1', trivia: 'one', status: NumberTriviaStatus.NOT_ANSWERED },
    { num: '23', trivia: 'two three', status: NumberTriviaStatus.NOT_ANSWERED },
    { num: '456', trivia: 'four five six', status: NumberTriviaStatus.NOT_ANSWERED },
    { num: '7890', trivia: 'seven eight nine zero', status: NumberTriviaStatus.NOT_ANSWERED },
  ];
  shuffledTrivia: NumberTrivia[] = [];

  showResults = false;
  rightAnswers: number;

  ngOnInit() {
    this.reset();
  }

  updateActualCard() {
    this.allTrivia[this.currentTrivia].status = NumberTriviaStatus.ACTUAL;
  }

  testCard(chosenCard: string) {
    const currentTriviaData = this.allTrivia[this.currentTrivia];

    currentTriviaData.status =
      currentTriviaData.num === chosenCard
        ? NumberTriviaStatus.RIGHT
        : NumberTriviaStatus.WRONG;

    this.currentTrivia++;

    if (this.currentTrivia !== this.allTrivia.length) {
      this.updateActualCard();
    } else {
      this.calculateResults();
    }
  }

  calculateResults() {
    this.rightAnswers = this.allTrivia
      .filter(trivia => trivia.status === NumberTriviaStatus.RIGHT)
      .length;

    this.showResults = true;
  }

  reset() {
    this.allTrivia.forEach(trivia => trivia.status = NumberTriviaStatus.NOT_ANSWERED);
    this.currentTrivia = 0;

    this.shuffledTrivia = [...this.allTrivia];
    shuffleArray(this.shuffledTrivia);

    this.updateActualCard();
    this.showResults = false;
  }
}
