import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJgr1y4lc3k8EZ-EFCIZ9NGFTYUxze4cc",
  authDomain: "wash-wheels.firebaseapp.com",
  projectId: "wash-wheels",
  storageBucket: "wash-wheels.firebasestorage.app",
  messagingSenderId: "1033486230560",
  appId: "1:1033486230560:web:63f6b81bbc13b8209ac845",
  measurementId: "G-8VGJDQF319"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const firebaseApp = initializeApp(firebaseConfig);
export { db, collection, addDoc, auth, provider, signInWithPopup, signOut, }