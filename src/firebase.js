// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi7E2lAxkNjMjA5J3oy3tq8-asRIEf84w",
  authDomain: "names-of-allah-6b28d.firebaseapp.com",
  databaseURL: "https://names-of-allah-6b28d-default-rtdb.firebaseio.com",
  projectId: "names-of-allah-6b28d",
  storageBucket: "names-of-allah-6b28d.appspot.com",
  messagingSenderId: "653087064701",
  appId: "1:653087064701:web:763fb408eec06eef0a6714",
  measurementId: "G-WWC98H18J3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);