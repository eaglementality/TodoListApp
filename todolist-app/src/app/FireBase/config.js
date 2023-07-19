// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const  firebaseConfig = {
  apiKey:"AIzaSyBza4SBqe2tBUl2sbte2QSR3eGzeFb5-YU",
  authDomain:"todo-list-app-df4f7.firebaseapp.com" ,
  projectId:"todo-list-app-df4f7" ,
  storageBucket: "todo-list-app-df4f7.appspot.com",
  messagingSenderId: "180878977331",
  appId: "1:180878977331:web:9daeff833d9fba6ff9f646",
  measurementId:  "G-0NCZXQ4E6E",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


