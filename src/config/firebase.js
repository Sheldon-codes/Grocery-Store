// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsVneFrPdYMly_lyjRzYF3QwiKwQicPWM",
  authDomain: "mama--mboga.firebaseapp.com",
  projectId: "mama--mboga",
  storageBucket: "mama--mboga.appspot.com",
  messagingSenderId: "536112785999",
  appId: "1:536112785999:web:efbf3a91516044304e983a",
  measurementId: "G-0HJDM2FWYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);