// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-95eda.firebaseapp.com",
  projectId: "mern-blog-95eda",
  storageBucket: "mern-blog-95eda.firebasestorage.app",
  messagingSenderId: "655670659138",
  appId: "1:655670659138:web:465fa670032a0665f205db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
