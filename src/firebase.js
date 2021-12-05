import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDKNoMV8ej39cT3Jr_wLusa699LMC1aLI0",
  authDomain: "instagram-clone-4a4ce.firebaseapp.com",
  projectId: "instagram-clone-4a4ce",
  storageBucket: "instagram-clone-4a4ce.appspot.com",
  messagingSenderId: "99360662992",
  appId: "1:99360662992:web:9570a5f5cfafaaa371c5d5",
  measurementId: "G-10BSSR3VMQ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
