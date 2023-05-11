import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi1jrkACnfNr-CfXEp36mk7XwZhMk07E8",
  authDomain: "dashboard-auth-fd2ef.firebaseapp.com",
  projectId: "dashboard-auth-fd2ef",
  storageBucket: "dashboard-auth-fd2ef.appspot.com",
  messagingSenderId: "1013583257994",
  appId: "1:1013583257994:web:2c4403d8a241c4c866e873",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
