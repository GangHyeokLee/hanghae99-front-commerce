import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_APP_FIREBASE_API_KEY}`,
  authDomain: `${import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: `${import.meta.env.VITE_APP_FIREBASE_DATABASE_URL}`,
  projectId: `${import.meta.env.VITE_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${import.meta.env.VITE_APP_FIREBASE_APP_ID}`,
  measurementId: `${import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID}`
};

firebase.initializeApp(firebaseConfig)

export default firebase;