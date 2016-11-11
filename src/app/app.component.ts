import { Component } from '@angular/core';
import {AngularFire,FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private fire: AngularFire){
    const quizzes$:FirebaseListObservable<any> = fire.database.list('quiz');
    quizzes$.subscribe(val => console.log(val));
  }
}
