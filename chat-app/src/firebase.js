// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDS_9kDorsi3bC1_Ux_vvV4pfknkJY0GAo",
    authDomain: "chat-for-date-8fecc.firebaseapp.com",
    projectId: "chat-for-date-8fecc",
    storageBucket: "chat-for-date-8fecc.appspot.com",
    messagingSenderId: "400776647769",
    appId: "1:400776647769:web:79a98b1bf0043278b04d48",
    measurementId: "G-LW2L22Y91D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);