// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWP2PraBaunSi-BFSuj9GItXvZd9nX6mI",
  authDomain: "maimeo-15fc0.firebaseapp.com",
  projectId: "maimeo-15fc0",
  storageBucket: "maimeo-15fc0.appspot.com",
  messagingSenderId: "729619695280",
  appId: "1:729619695280:web:ec07ce3dd3fb780843dd75",
  measurementId: "G-D6TH7RZBPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);