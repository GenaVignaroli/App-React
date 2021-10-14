import  firebase from "firebase/app" 

import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyA0XHrSHSYlfrEFYUh5069zSP0GPqupYTQ",
    authDomain: "proyecto-react-b7a7e.firebaseapp.com",
    projectId: "proyecto-react-b7a7e",
    storageBucket: "proyecto-react-b7a7e.appspot.com",
    messagingSenderId: "646406318066",
    appId: "1:646406318066:web:b6b24188d0241697c6ed6b"
  };

const app = firebase.initializeApp(firebaseConfig)
    
export const firestore = firebase.firestore(app)  