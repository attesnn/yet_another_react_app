// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXrxcGMJ4UbZAM0HJspHydATZ3iRlxM8g",
  authDomain: "aten-nettisivut.firebaseapp.com",
  databaseURL: "https://aten-nettisivut-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "aten-nettisivut",
  storageBucket: "aten-nettisivut.appspot.com",
  messagingSenderId: "496433719188",
  appId: "1:496433719188:web:5cfa1746cdd32c924ad181",
  measurementId: "G-7H3LY3HX3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider ();