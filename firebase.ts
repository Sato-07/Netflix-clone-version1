// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc2MMEpguO7rbtJuE_AiVB4e-BkvQo8l4",
  authDomain: "netflix-clone-version1.firebaseapp.com",
  projectId: "netflix-clone-version1",
  storageBucket: "netflix-clone-version1.appspot.com",
  messagingSenderId: "596430271416",
  appId: "1:596430271416:web:c123ce6a4e2b850964554d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()
