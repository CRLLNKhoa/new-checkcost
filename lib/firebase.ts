// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJ3aVNCEDEEbsBUS0z3wj8K3aWRgBnofM",
    authDomain: "chart-7d7d3.firebaseapp.com",
    projectId: "chart-7d7d3",
    storageBucket: "chart-7d7d3.appspot.com",
    messagingSenderId: "322690033588",
    appId: "1:322690033588:web:559790c154094035fef4e1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };