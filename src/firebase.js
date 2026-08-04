// src/firebase.js

import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWwrIT6LGxN4Yu9m8a036eOus5Dw_8Z24",
  authDomain: "careercraft-8b392.firebaseapp.com",
  projectId: "careercraft-8b392",
  storageBucket: "careercraft-8b392.firebasestorage.app",
  messagingSenderId: "132900634099",
  appId: "1:132900634099:web:970317fe58a9cd983ee686",
  measurementId: "G-Q6ZQ95DEEY",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export default app;