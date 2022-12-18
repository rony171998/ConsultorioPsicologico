// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDAWn0XAX5zZJ6xhNYoF_VbI89TuD2Haw",
  authDomain: "app-psicologica-f01df.firebaseapp.com",
  projectId: "app-psicologica-f01df",
  storageBucket: "app-psicologica-f01df.appspot.com",
  messagingSenderId: "50572730397",
  appId: "1:50572730397:web:4bbed23afaf564ec7d26f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);