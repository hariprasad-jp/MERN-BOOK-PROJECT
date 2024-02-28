// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-g9B_WOLLAA5WtrKqjeTh4k5hhyKe4pk",
  authDomain: "mern-book-inventory-2415.firebaseapp.com",
  projectId: "mern-book-inventory-2415",
  storageBucket: "mern-book-inventory-2415.appspot.com",
  messagingSenderId: "684069873778",
  appId: "1:684069873778:web:324a3b0f5767ba66c53aeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;