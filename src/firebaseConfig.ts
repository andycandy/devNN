import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCoR1O7Y9sUpObJaSF_ZbvMoMFdI75wg2E",
    authDomain: "test-write-fee18.firebaseapp.com",
    projectId: "test-write-fee18",
    storageBucket: "test-write-fee18.appspot.com",
    messagingSenderId: "454695701941",
    appId: "1:454695701941:web:9bb010df78c006a6b91dfc",
    measurementId: "G-FY0CSM58F4"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);