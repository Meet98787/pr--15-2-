// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyBnC7jEHlpQ41KzIbZBuPCpOveBiaGDnjo",
    authDomain: "finalproject-57479.firebaseapp.com",
    databaseURL: "https://finalproject-57479-default-rtdb.firebaseio.com",
    projectId: "finalproject-57479",
    storageBucket: "finalproject-57479.appspot.com",
    messagingSenderId: "568691966489",
    appId: "1:568691966489:web:3986dcddd20d4b5a2c2088"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export { database, app };
export const auth = firebase.auth();