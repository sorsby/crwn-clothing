// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClCq6u_-KnaNXi3WAzlRvJWPYwZF8iGwM",
  authDomain: "react-r-us.firebaseapp.com",
  projectId: "react-r-us",
  storageBucket: "react-r-us.appspot.com",
  messagingSenderId: "153030469893",
  appId: "1:153030469893:web:34d4a231246341e0846f6c",
  measurementId: "G-BFZ7N0R6VE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  await signInWithPopup(auth, provider);
};
