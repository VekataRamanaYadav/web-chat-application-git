import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJ1M2lQPZqCAMV_vQXamSPs1f_Nxj_j8Q",
  authDomain: "finaltest-5132a.firebaseapp.com",
  projectId: "finaltest-5132a",
  storageBucket: "finaltest-5132a.appspot.com",
  messagingSenderId: "551743435903",
  appId: "1:551743435903:web:37f77680f9e4ddf8c13b4a"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
