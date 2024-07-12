// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8gUIxtXuU_ZjDfm-wkLjLigYHOQkr-iY",
  authDomain: "foodxpress-5bd4b.firebaseapp.com",
  projectId: "foodxpress-5bd4b",
  storageBucket: "foodxpress-5bd4b.appspot.com",
  messagingSenderId: "427773602539",
  appId: "1:427773602539:web:576b6d755a631535042cae",
  measurementId: "G-LQZNNYGFJJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// export const db = getFirestore(app);
// export { auth, firestore };