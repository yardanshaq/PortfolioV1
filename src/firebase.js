import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk50--v_b1Nc77EoFyzAzT1sVtgSjlr2Q",
  authDomain: "web-kelas-3362a.firebaseapp.com",
  projectId: "web-kelas-3362a",
  storageBucket: "web-kelas-3362a.firebasestorage.app",
  messagingSenderId: "384047672270",
  appId: "1:384047672270:web:890cd23e0b712fb6ac199f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
