import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7GR6EHx5YYdHaKTu_lr_F0SbEJGw2-1k",
  authDomain: "facebook-clone-82a5d.firebaseapp.com",
  projectId: "facebook-clone-82a5d",
  storageBucket: "facebook-clone-82a5d.appspot.com",
  messagingSenderId: "108850143479",
  appId: "1:108850143479:web:58d5fe15369f944875b3f2",
  measurementId: "G-WMC06G32YS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
