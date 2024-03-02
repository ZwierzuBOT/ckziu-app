
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA1hLCIgIW2A0b-xcH5ghJeomiIrkFlBBU",
  authDomain: "ckziukonkurs-5a433.firebaseapp.com",
  projectId: "ckziukonkurs-5a433",
  storageBucket: "ckziukonkurs-5a433.appspot.com",
  messagingSenderId: "66404832260",
  appId: "1:66404832260:web:f21b8f5e45a471afddd151",
  measurementId: "G-N6FR5DVZ1K"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()