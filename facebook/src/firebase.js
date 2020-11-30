import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyXwfsmX_mrtY-D1ixWqYMSKcAOVoe3lI",
  authDomain: "facebook-13729.firebaseapp.com",
  databaseURL: "https://facebook-13729.firebaseio.com",
  projectId: "facebook-13729",
  storageBucket: "facebook-13729.appspot.com",
  messagingSenderId: "65100405011",
  appId: "1:65100405011:web:000fbc0e8284f7c84f22e6",
  measurementId: "G-B44WL5CWK7",
};

/* Connect Firebase backend with React frontend */
const fireBaseApp = firebase.initializeApp(firebaseConfig);
const db = fireBaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); /* This will provide Google Authentication Service */

export { auth, provider };
export default db;
