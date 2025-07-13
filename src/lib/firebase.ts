import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCobXOz4FI6jRebN9N_vAAdsSQZ3UBrX04",
  authDomain: "runway-cad2d.firebaseapp.com",
  projectId: "runway-cad2d",
  storageBucket: "runway-cad2d.firebasestorage.app",
  messagingSenderId: "736267195482",
  appId: "1:736267195482:web:9687670d052abc95837463"
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const auth = getAuth(app)
export const db = getFirestore(app);
