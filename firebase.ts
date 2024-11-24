// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getFunctions } from 'firebase/functions'


const firebaseConfig = {
  apiKey: "AIzaSyBVtpwW8X_z33rec9vVnUHJlogHpz10MgM",
  authDomain: "chat-translator-a1567.firebaseapp.com",
  projectId: "chat-translator-a1567",
  storageBucket: "chat-translator-a1567.firebasestorage.app",
  messagingSenderId: "461408574481",
  appId: "1:461408574481:web:aea9d6e254cb1f779965b0",
  measurementId: "G-MX02W0996H"
};

const app = getApps().length ? getApp(): initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const functions = getFunctions()

export { db, auth, functions };

