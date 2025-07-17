//firebase.js
import { initializeApp }              from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDocs, collection, query, where, onSnapshot } from 'firebase/firestore';
import { getStorage }      from "firebase/storage";
import Constants from "expo-constants"
 
const{
  EXPO_FIREBASE_API_KEY,
  EXPO_FIREBASE_AUTH_DOMAIN,
  EXPO_FIREBASE_PROJECT_ID,
  EXPO_FIREBASE_STORAGE_BUCKET,
  EXPO_FIREBASE_MESSAGING_SENDER_ID,
  EXPO_FIREBASE_APP_ID,
  EXPO_APP_FIREBASE_MEASUREMENT_ID
} = Constants.expoConfig?.extra ?? {} ;
console.log ("API_KEY:", EXPO_FIREBASE_API_KEY)
console.log ("AUTH_DOMAIN" , EXPO_FIREBASE_AUTH_DOMAIN)
const firebaseConfig = {
  apiKey:            EXPO_FIREBASE_API_KEY,
  authDomain:        EXPO_FIREBASE_AUTH_DOMAIN,
  projectId:         EXPO_FIREBASE_PROJECT_ID,
  storageBucket:     EXPO_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: EXPO_FIREBASE_MESSAGING_SENDER_ID,
  appId:             EXPO_FIREBASE_APP_ID,
  measurementId:     EXPO_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage,collection, onSnapshot, doc, getDocs, query, where }

