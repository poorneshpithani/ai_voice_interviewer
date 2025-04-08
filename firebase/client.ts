import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCu6ve_v_EmB5ut8PzetJOBMwZCz9ehXlg",
  authDomain: "prepwise-98bc2.firebaseapp.com",
  projectId: "prepwise-98bc2",
  storageBucket: "prepwise-98bc2.firebasestorage.app",
  messagingSenderId: "982065616928",
  appId: "1:982065616928:web:995c0facfc69161286c445",
  measurementId: "G-J9JR1VC058"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)