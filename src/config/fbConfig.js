import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyB0QoapRxAvVpxbv2cbf28BpvTcQrJARKM",
  authDomain: "smart-building-fec8f.firebaseapp.com",
  databaseURL: "https://smart-building-fec8f.firebaseio.com",
  projectId: "smart-building-fec8f",
  storageBucket: "smart-building-fec8f.appspot.com",
  messagingSenderId: "1083239587387",
  appId: "1:1083239587387:web:fcaabf2a8fa4cd074dc61e",
  measurementId: "G-30YNF5NY34",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
