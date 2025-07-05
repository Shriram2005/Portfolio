// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyC-n9B1aqg8iawdZfGRaC9NYRsiyZBCuMY",
  authDomain: "shriram-2005.firebaseapp.com",
  databaseURL: "https://shriram-2005-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shriram-2005",
  storageBucket: "shriram-2005.firebasestorage.app",
  messagingSenderId: "241228145716",
  appId: "1:241228145716:web:aeaf62663561f9e146d661",
  measurementId: "G-K5TE7RK9DZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (optional)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;