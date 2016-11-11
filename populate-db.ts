import { database, initializeApp } from "firebase";
import { firebaseConfig } from "./src/environments/firebase.config";
import { dbData } from "./db-data";

/*
console.log("WARNING VERY IMPORTANT - PLEASE READ THIS\n\n\n");
console.log('WARNING Please set your own firebase config on src/environmnents/firebase.config.ts');
console.log('Otherwise you will get permissions errors, because the populate-db script is trying to write to my database instead of yours. ');
console.log('Any issues please contact me, Thanks, Vasco\n\n\n');
*/
initializeApp(firebaseConfig);


const quizzesRef = database().ref('quizzes');
const questionsRef = database().ref('questions');
const choicesRef = database().ref('choices');

var quizQuestionsKeys = [];
var questionChoicesKeys = [];



// create quizzes
dbData.quizzes.forEach(function (quiz) {
    const quizRef = quizzesRef.push({
        title: quiz.title,
        description: quiz.description
    });

    // create questions
    quiz.questions.forEach(question => {
        const questionRef = questionsRef.push({
            title: question.title,
            description: question.description,
            quizId: quizRef.key
        });

        // create quizQuestionsKeys list
        quizQuestionsKeys.push(questionRef.key);
        //console.log('create quizQuestionsKeys',quizQuestionsKeys);


        // create choices
        question.choices.forEach(choice => {
            const choiceRef = choicesRef.push({
                title: choice.title,
                description: choice.description,
                questionId: questionRef.key
            });

            // create quizQuestionsKeys list
            //console.log('choiceRef.key',choiceRef.key);
            questionChoicesKeys.push(choiceRef.key);



        }); // for each question choice


        //console.log('questionChoicesKeys',questionChoicesKeys);
        // create association question_choices
        const choicesAssociation = database().ref('question_choices');
        const question_choices = choicesAssociation.child(questionRef.key);
        questionChoicesKeys.forEach(choiceKey => {
            //console.log('adding choice keys to question_choices');
            const choicequestionAssociation = question_choices.child(choiceKey);
            choicequestionAssociation.set(true);
        });
        // empty choice keys for this question
        questionChoicesKeys = [];
    }); // for each quiz question

    // create association quizquestions
    const association = database().ref('quiz_questions');
    const quizquestions = association.child(quizRef.key);

    quizQuestionsKeys.forEach(questionKey => {
        //console.log('adding question keys to quizquestions ');
        const questionquizAssociation = quizquestions.child(questionKey);
        questionquizAssociation.set(true);
    });



}); // for each quiz






