// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgSFO-n5NUO-kNT04Oo2rcTZtWYzPWKEw",
    authDomain: "easyhire-6931f.firebaseapp.com",
    projectId: "easyhire-6931f",
    storageBucket: "easyhire-6931f.firebasestorage.app",
    messagingSenderId: "96717878783",
    appId: "1:96717878783:web:6b3d885df5e45d5c0ae3ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;