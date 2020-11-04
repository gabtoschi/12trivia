export enum NumberTriviaStatus {
  NOT_ANSWERED,
  ACTUAL,
  WRONG,
  RIGHT,
}

export interface NumberTrivia {
  num: string;
  trivia: string;
  status: NumberTriviaStatus;
}

export interface TriviaAPIResult {
  [num: string]: string;
}
