// firebase import
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// firebaseの初期化
export const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

const googleProvider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();

export const auth = getAuth();
export const db = getFirestore();

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const email = error.email;
      console.log(email, errorCode);
    });
};

export const signInWithGithub = () => {
  signInWithPopup(auth, githubprovider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};
export const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log("logOut");
      document.location.reload();
    })
    .catch((error) => {
      console.log(error.message);
    });
};
