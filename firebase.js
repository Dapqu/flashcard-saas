// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7hYBustAvKvNdRZV7MXQuVe3whFrAyaU",
  authDomain: "flashcard-a663b.firebaseapp.com",
  projectId: "flashcard-a663b",
  storageBucket: "flashcard-a663b.appspot.com",
  messagingSenderId: "126383372370",
  appId: "1:126383372370:web:ccffe9e077bbeb05d1c78b",
  measurementId: "G-X1V1Y53B0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;