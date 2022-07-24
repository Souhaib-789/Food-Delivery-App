
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";
import { getStorage  } from "firebase/storage";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBQdl7mdNNGyI3ejgY0xpRA5P18O7U2Oj8",
  authDomain: "fooddeliveryapp-84b16.firebaseapp.com",
  projectId: "fooddeliveryapp-84b16",
  storageBucket: "fooddeliveryapp-84b16.appspot.com",
  messagingSenderId: "380132491591",
  appId: "1:380132491591:web:460aee560fea1c06dd4c62",
  measurementId: "G-D9EP7VL4TK"
});


// const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage(firebaseApp);
 export {
   //  app,
   db,
   auth,
   storage,
   
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
doc,
setDoc,
addDoc,
collection,
getDocs,
query,
getDoc,
onAuthStateChanged

 
 };
 