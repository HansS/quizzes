import {Observable} from 'rxjs';

import { QuizDataService } from '../shared/services/quiz-data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'hs-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quizzes:Observable<any> ;
  constructor(private service: QuizDataService) { }

  ngOnInit() {
    this.quizzes = this.service.getQuizzes();
  }

}
