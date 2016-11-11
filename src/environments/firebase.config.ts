
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyCxRtXXNxNcV-RQWt-orNujR_reaDqGZqk",
    authDomain: "quizzes-ec6da.firebaseapp.com",
    databaseURL: "https://quizzes-ec6da.firebaseio.com",
    storageBucket: "quizzes-ec6da.appspot.com",
    messagingSenderId: "64350884896"
  };





export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};