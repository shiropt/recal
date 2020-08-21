import firebase from "firebase"
const  firebaseConfig = {
  apiKey: "AIzaSyDUIeiVmjnsx8dm3Are7OkE38Fg0VwLa5w",
  authDomain: "recal-f1a64.firebaseapp.com",
  databaseURL: "https://recal-f1a64.firebaseio.com",
  projectId: "recal-f1a64",
  storageBucket: "recal-f1a64.appspot.com",
  messagingSenderId: "1090122028378",
  appId: "1:1090122028378:web:e035ae14874df7cbfd4f63",
  measurementId: "G-RY9Y77VGE2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const dbUsers = db.collection("users");