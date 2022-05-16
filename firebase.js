// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRK1hSLy7zK_H0rSC5VGFxbWg3FGOQBvg",
  authDomain: "instagram-clone-8f084.firebaseapp.com",
  projectId: "instagram-clone-8f084",
  storageBucket: "instagram-clone-8f084.appspot.com",
  messagingSenderId: "49775837803",
  appId: "1:49775837803:web:8c4ac7fac148468fb0672e",
  measurementId: "G-TZ42MWSFYB"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);

export { app, db, storage };