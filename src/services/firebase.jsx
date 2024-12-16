import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgt0G3ePgqlAsjmrUp-5aBjacjlPq_z1I",
  authDomain: "art-synt.firebaseapp.com",
  projectId: "art-synt",
  storageBucket: "art-synt.firebasestorage.app",
  messagingSenderId: "864948349932",
  appId: "1:864948349932:web:f6dd57a38a97a168b5aec9",
  measurementId: "G-YPKT079XCL"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)