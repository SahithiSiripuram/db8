import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAB8JbbubNtpHYStgKUCCXy1e1on1lgSEo",
  authDomain: "db8-db3a2.firebaseapp.com",
  projectId: "db8-db3a2",
  storageBucket: "gs://db8-db3a2.appspot.com/",
  messagingSenderId: "97867828262",
  appId: "1:97867828262:web:497324bed0e5e14be6eae7",
  measurementId: "G-36J9N24XPR",
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();