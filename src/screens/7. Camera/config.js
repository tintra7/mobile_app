// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8vc27I-VtpbUzb9ZsjMBoed8jrS_tqPA",
  authDomain: "omurice-2f4b8.firebaseapp.com",
  projectId: "omurice-2f4b8",
  storageBucket: "omurice-2f4b8.appspot.com",
  messagingSenderId: "954480652479",
  appId: "1:954480652479:web:92398d883d4c9e494b560a",
  measurementId: "G-KK2FTRKTJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);