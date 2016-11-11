import { Quiz } from './quiz.model';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class QuizDataService {

  constructor(private fire: AngularFire) {

  }

  getQuizzes(): Observable<Quiz[]> {
    return this.fire.database.list('quizzes');
  }
}
