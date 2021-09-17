import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADxKdzP1yJGdray2xGI4pZ1Szov7me3Ik",
  authDomain: "challenge-73666.firebaseapp.com",
  projectId: "challenge-73666",
  storageBucket: "challenge-73666.appspot.com",
  messagingSenderId: "108422105837",
  appId: "1:108422105837:web:0545148c9c7ef0d4631ae4",
  measurementId: "G-436ELPSWNT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
