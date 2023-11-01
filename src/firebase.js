// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZpU5llHZqZWgZQOAO2p8xTPnebW4Hwek",
    authDomain: "my-website-4bd74.firebaseapp.com",
    projectId: "my-website-4bd74",
    storageBucket: "my-website-4bd74.appspot.com",
    messagingSenderId: "41420672473",
    appId: "1:41420672473:web:955f985b3fe8f9883f1dc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }