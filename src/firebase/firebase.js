// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";
import { collection, getFirestore } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const categoriesRef = collection(db, "quizCategories");
export const quizRef = collection(db, "allQuizzes");

