// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFr3px1RBnFVvpR2QBN4CXY-vhTLrwDX4",
  authDomain: "to-do-list-641a2.firebaseapp.com",
  projectId: "to-do-list-641a2",
  storageBucket: "to-do-list-641a2.appspot.com",
  messagingSenderId: "359181282503",
  appId: "1:359181282503:web:af6899566fb2879a2da2e2",
  measurementId: "G-G194N3XW83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);