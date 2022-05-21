// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTTSb7WLZg5s7ERkSxDey-6L3ss3u0_E8",
    authDomain: "x-parts.firebaseapp.com",
    projectId: "x-parts",
    storageBucket: "x-parts.appspot.com",
    messagingSenderId: "897491134744",
    appId: "1:897491134744:web:9774423282c4611a1b966d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;