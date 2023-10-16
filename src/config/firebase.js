
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCgue9dQKY2-0hldGE9m5lDIGV1850tf1I",
  authDomain: "jajaifal523.firebaseapp.com",
  projectId: "jajaifal523",
  storageBucket: "jajaifal523.appspot.com",
  messagingSenderId: "361342522783",
  appId: "1:361342522783:web:64cafe2d28c202bbd619aa",
  measurementId: "G-2MN9GX2MJ9"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, auth, storage }