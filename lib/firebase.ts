"use client";

import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBvc-Ng21YZvtXSVqRg7AYDrOl4paCuTFI",
  authDomain: "tava-e5c08.firebaseapp.com",
  projectId: "tava-e5c08",
  storageBucket: "tava-e5c08.firebasestorage.app",
  messagingSenderId: "904315710289",
  appId: "1:904315710289:web:33ea8182e7111376c14170",
  measurementId: "G-P76MXYDBQW",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

let analytics: Analytics | null = null;

if (typeof window !== "undefined") {
  isSupported()
    .then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    })
    .catch(() => {
      analytics = null;
    });
}

export { app, auth, db, analytics };
