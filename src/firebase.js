import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyA2hqp2sC8jFSz9p8tBd-IsROZysxsMNtw",
    authDomain: "unichat-89e0e.firebaseapp.com",
    projectId: "unichat-89e0e",
    storageBucket: "unichat-89e0e.appspot.com",
    messagingSenderId: "157285338543",
    appId: "1:157285338543:web:55b6820a2ae001837f335a",
    // measurementId: "G-0H82FD9PCW"
  }).auth();