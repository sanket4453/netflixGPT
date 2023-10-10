// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiw7VrK4l5sCFEV6-FgvRFg1CIKlSdM2Q",
  authDomain: "netflix-gpt-d7900.firebaseapp.com",
  projectId: "netflix-gpt-d7900",
  storageBucket: "netflix-gpt-d7900.appspot.com",
  messagingSenderId: "857603246786",
  appId: "1:857603246786:web:62c998ed2031e55312095b",
  measurementId: "G-ZFDKDHT5P2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();