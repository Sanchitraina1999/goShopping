import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCc0PxMobOFEt_-gjQiT7q9UtqXAlk2x9Q",
  authDomain: "sanchit199-goshopping.firebaseapp.com",
  databaseURL: "https://sanchit199-goshopping.firebaseio.com",
  projectId: "sanchit199-goshopping",
  storageBucket: "sanchit199-goshopping.appspot.com",
  messagingSenderId: "200880810386",
  appId: "1:200880810386:web:e64b84a4595a874d11394b",
  measurementId: "G-6XQNW7DBS4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
