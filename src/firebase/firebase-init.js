import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "@firebase/auth";
//Object that generate firebase to init database
import { firebaseConfig } from "./firebase-config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.addScope("profile");
provider.addScope("email");
const auth = getAuth(app);
const firestore = getFirestore(app);
// collection()

// const db = app.firestore();
// const googleAuthProvider = new GoogleAuthProvider();

export {
  // app,
  provider,
  auth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  collection,
  firestore,
  addDoc
};
