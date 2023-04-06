import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDmbQqzXbYrCAMKg-zDYF7mpu6nFWATIs4",
    authDomain: "final-react-js-nicolas-reynoso.firebaseapp.com",
    databaseURL: "https://final-react-js-nicolas-reynoso-default-rtdb.firebaseio.com",
    projectId: "final-react-js-nicolas-reynoso",
    storageBucket: "final-react-js-nicolas-reynoso.appspot.com",
    messagingSenderId: "258586079463",
    appId: "1:258586079463:web:7d33a74a641dd765f3f242"
  }
  
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
