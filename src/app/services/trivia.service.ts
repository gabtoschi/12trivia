import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { TriviaAPIResult } from '../models/trivia.model';


@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  apiBaseUrl = 'http://numbersapi.com/';

  getTrivia(numberList: number[]): Observable<TriviaAPIResult> {
    const numberString = numberList.join(',');

    return this.http.get<TriviaAPIResult>(`${this.apiBaseUrl}${numberString}?fragment`);
  }

}
