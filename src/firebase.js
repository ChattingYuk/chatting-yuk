// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chatting-yuk-d13ab.firebaseapp.com",
  projectId: "chatting-yuk-d13ab",
  storageBucket: "chatting-yuk-d13ab.appspot.com",
  messagingSenderId: "139208027201",
  appId: "1:139208027201:web:40322b00b2d9bcde21aac0",
  measurementId: "G-68ZM7PF49J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);