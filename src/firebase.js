// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB7tG0HJWAXwhTSAnSEE5XPr4jkjiFeUso",
    authDomain: "ecommerce-site-3c042.firebaseapp.com",
    projectId: "ecommerce-site-3c042",
    storageBucket: "ecommerce-site-3c042.appspot.com",
    messagingSenderId: "484624049806",
    appId: "1:484624049806:web:487401c63978a6211e0bdf",
    measurementId: "G-ZG9LSS72G6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };