// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAycdtdaZrrZwG1YF5DVes11qe2Zj7p34Q",
  authDomain: "todoapp-b0ad2.firebaseapp.com",
  projectId: "todoapp-b0ad2",
  storageBucket: "todoapp-b0ad2.appspot.com",
  messagingSenderId: "879576486261",
  appId: "1:879576486261:web:a636148be0a4ced55c833c",
  measurementId: "G-GRD3Q1E6Z9"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);