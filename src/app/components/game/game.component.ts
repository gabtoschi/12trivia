import { Component, OnInit } from '@angular/core';

import { tap } from 'rxjs/operators';

import { NumberTrivia, NumberTriviaStatus, TriviaAPIResult } from '@models';
import { TriviaService } from '@services';
import { getRandomInt, shuffleArray } from '@utils';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  triviaAmount = 9;
  triviaMax = 100;

  currentTrivia = 0;

  allTrivia: NumberTrivia[] = [];
  shuffledTrivia: NumberTrivia[] = [];

  showResults = false;
  rightAnswers: number;

  constructor(
    private readonly triviaService: TriviaService,
  ) { }

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

  getTrivia() {
    const numbersToGetTrivia = [];

    for (let i = 0; i < this.triviaAmount; i++) {
      numbersToGetTrivia.push(getRandomInt(0, this.triviaMax));
    }

    this.triviaService.getTrivia(numbersToGetTrivia).pipe(
      tap(response => {
        this.mapTriviaFromAPI(response);
        this.configGame();
      })
    ).subscribe();
  }

  mapTriviaFromAPI(response: TriviaAPIResult) {
    this.allTrivia = Object.keys(response).map(num => ({
      num,
      trivia: response[num],
      status: NumberTriviaStatus.NOT_ANSWERED,
    }));
  }

  reset() {
    this.getTrivia();
  }

  configGame() {
    this.currentTrivia = 0;

    this.shuffledTrivia = [...this.allTrivia];
    shuffleArray(this.shuffledTrivia);

    this.updateActualCard();
    this.showResults = false;
  }
}
