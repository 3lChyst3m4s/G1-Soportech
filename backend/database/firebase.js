import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAn2gvjgRFXGVbvvt3PHp9cbkBxOVviw8M",
  authDomain: "soportech-1724c.firebaseapp.com",
  projectId: "soportech-1724c",
  storageBucket: "soportech-1724c.appspot.com",
  messagingSenderId: "138091698419",
  appId: "1:138091698419:web:be0d0e8ba1bea4f6387f86"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);