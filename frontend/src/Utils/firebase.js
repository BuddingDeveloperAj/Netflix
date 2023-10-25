// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQphjvsDYTTpN5RVYh8z94wS4lzu2T4ww",
    authDomain: "netflixgpt-d6526.firebaseapp.com",
    projectId: "netflixgpt-d6526",
    storageBucket: "netflixgpt-d6526.appspot.com",
    messagingSenderId: "64185814573",
    appId: "1:64185814573:web:67be1569498ce279ab72a4",
    measurementId: "G-T91WKHZNMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app