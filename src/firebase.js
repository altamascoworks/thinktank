import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6tsoZDYMzDki_Jc9EmCGq-BQLH1bckhg",
  authDomain: "space-324d3.firebaseapp.com",
  projectId: "space-324d3",
  storageBucket: "space-324d3.appspot.com",
  messagingSenderId: "799785433914",
  appId: "1:799785433914:web:8aa713a15b555daaa36e03",
  measurementId: "G-23NNKJ7NL1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
