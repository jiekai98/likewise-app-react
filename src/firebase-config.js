//firebase import (To be hidden later)
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAbbA9I4h3iMc5J4BxzwUZAEqJp8pmDPR0",
  authDomain: "codetherapy-8eba4.firebaseapp.com",
  projectId: "codetherapy-8eba4",
  storageBucket: "codetherapy-8eba4.appspot.com",
  messagingSenderId: "862928657004",
  appId: "1:862928657004:web:f58e7434741bd394f35649",
  measurementId: "G-XXVYW5EGTL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);