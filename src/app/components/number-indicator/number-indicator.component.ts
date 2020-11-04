import { Component, Input } from '@angular/core';

import { NumberTrivia, NumberTriviaStatus } from '@models';


@Component({
  selector: 'app-number-indicator',
  templateUrl: './number-indicator.component.html',
  styleUrls: ['./number-indicator.component.scss'],
})
export class NumberIndicatorComponent {

  @Input() trivia: NumberTrivia;

  readonly status = NumberTriviaStatus;
}
