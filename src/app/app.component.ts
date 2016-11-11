import { Quiz } from './shared/services/quiz.model';
import { QuizDataService } from './shared/services/quiz-data.service';
import { Component } from '@angular/core';
import {AngularFire,FirebaseListObservable} from 'angularfire2';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app works!';
  quizzes: Quiz[];

  constructor(private service:QuizDataService){
    this.service.getQuizzes()
    .do(console.log)
    .subscribe(quizzes => this.quizzes = quizzes);
  }
}
