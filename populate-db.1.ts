import {database, initializeApp} from 'firebase';
import {firebaseConfig} from './src/environments/firebase.config';
import {dbData} from './db-data';


console.log('WARNING VERY IMPORTANT - PLEASE READ THIS\n\n\n'); 
console.log('WARNING Please set your own firebase config on src/environmnents/firebase.config.ts');
const message = `Otherwise you will get permissions errors, because the populate-db script is trying 
                 to write to my database instead of yours. ?`;


console.log(message);
console.log('Any issues please contact me, Thanks, Vasco\n\n\n');

initializeApp(firebaseConfig);


const quizzesRef = database().ref('quizzesRef');
const lessonsRef = database().ref('lessons');



dbData.quizzesRef.forEach( quiz => {

  console.log('adding quiz', quiz.url);

  const quizRef = quizzesRef.push({
      url: quiz.url,
      description: quiz.description,
      iconUrl: quiz.iconUrl,
      quizListIcon: quiz.quizListIcon,
      longDescription: quiz.longDescription
  });

  let lessonKeysPerquiz = [];

  quiz.lessons.forEach((lesson:any) =>  {

    console.log('adding lesson ', lesson.url);

    lessonKeysPerquiz.push(lessonsRef.push({
        description: lesson.description,
        duration: lesson.duration,
        url: lesson.url,
        tags: lesson.tags,
        videoUrl: lesson.videoUrl || null,
        longDescription: lesson.longDescription,
        quizId: quizRef.key
      }).key);

  });


  const association = database().ref('lessonsPerquiz');

  const lessonsPerquiz = association.child(quizRef.key);

  lessonKeysPerquiz.forEach(lessonKey => {
    console.log('adding lesson to quiz ');

    const lessonquizAssociation = lessonsPerquiz.child(lessonKey);

    lessonquizAssociation.set(true);
  }); 


});








