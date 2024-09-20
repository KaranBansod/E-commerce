// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOhOFBe1_cwY4ogmO5TYKjyNWC-94dGJw",
  authDomain: "myfirstapp-71480.firebaseapp.com",
  projectId: "myfirstapp-71480",
  storageBucket: "myfirstapp-71480.appspot.com",
  messagingSenderId: "1044890072190",
  appId: "1:1044890072190:web:867f1455f7aabaf04e142f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}