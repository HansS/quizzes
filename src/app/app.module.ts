import { database } from 'firebase';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from '../environments/firebase.config';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizEditComponent } from './quiz-edit/quiz-edit.component';
import { QuizListitemComponent } from './quiz-listitem/quiz-listitem.component';
import {QuizDataService} from './shared/services/quiz-data.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@NgModule({
  declarations: [
    AppComponent,
    QuizzesComponent,
    QuizListComponent,
    QuizEditComponent,
    QuizListitemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [QuizDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
