import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyAwfUwBOAs-iEMxmGb-6hi2ODFfDb7Zsoo",
  authDomain: "ecommerce-32437.firebaseapp.com",
  projectId: "ecommerce-32437",
  storageBucket: "ecommerce-32437.appspot.com",
  messagingSenderId: "494144306285",
  appId: "1:494144306285:web:b46fd04d2e367153b75364"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();