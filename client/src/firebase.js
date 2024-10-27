// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-147c8.firebaseapp.com",
  projectId: "mern-blog-147c8",
  storageBucket: "mern-blog-147c8.appspot.com",
  messagingSenderId: "999824794641",
  appId: "1:999824794641:web:9c6dc2b60727b62738bdb0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
