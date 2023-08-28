import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDuwWX8iDM3PmphwXSjg_1BgzKZXAu4G7Q",
  authDomain: "jars-32c77.firebaseapp.com",
  projectId: "jars-32c77",
  storageBucket: "jars-32c77.appspot.com",
  messagingSenderId: "1012825380305",
  appId: "1:1012825380305:web:298710a5702a7358d93cf0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app); 