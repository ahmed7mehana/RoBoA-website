
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEEaVHNDo_kHO5IesCugP8QlKejQtVyaQ",
  authDomain: "app-x-98fb8.firebaseapp.com",
  projectId: "app-x-98fb8",
  storageBucket: "app-x-98fb8.appspot.com",
  messagingSenderId: "602580708006",
  appId: "1:602580708006:web:dfb71f2c312917044f6267"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db =getFirestore(app)


