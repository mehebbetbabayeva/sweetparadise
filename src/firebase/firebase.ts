
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBFg_1t1zxFCizBre4k5QYMU1wnW0Mwnp8",
    authDomain: "sweetparadise-6a1a8.firebaseapp.com",
    projectId: "sweetparadise-6a1a8",
    storageBucket: "sweetparadise-6a1a8.appspot.com",
    messagingSenderId: "557955567077",
    appId: "1:557955567077:web:a590cf6f6b13e04651f30c",
    measurementId: "G-PH91RE9942"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;