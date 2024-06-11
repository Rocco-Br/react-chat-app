
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "react-chat-e9f0b.firebaseapp.com",
    projectId: "react-chat-e9f0b",
    storageBucket: "react-chat-e9f0b.appspot.com",
    messagingSenderId: "131345583995",
    appId: "1:131345583995:web:7cc3cb43cced6cdbb9b7de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()