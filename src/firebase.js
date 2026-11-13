import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByj19ZkpBddPI4YWVvKkwE-GYUG6hXUvo",
  authDomain: "standly-68b04.firebaseapp.com",
  projectId: "standly-68b04",
  storageBucket: "standly-68b04.firebasestorage.app",
  messagingSenderId: "558339730181",
  appId: "1:558339730181:web:8575f605c917d64d50256c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
