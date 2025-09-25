import { getApps, initializeApp, cert, type App } from "firebase-admin/app";
import { getAuth, type Auth } from "firebase-admin/auth";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

let cachedApp: App | null = null;
let cachedAuth: Auth | null = null;
let cachedDb: Firestore | null = null;

function getFirebaseAdminApp(): App {
  if (cachedApp) {
    return cachedApp;
  }

  const existingApp = getApps()[0];
  if (existingApp) {
    cachedApp = existingApp;
    return existingApp;
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "Missing Firebase Admin credentials. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY environment variables."
    );
  }

  cachedApp = initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });

  return cachedApp;
}

export function getAdminAuth(): Auth {
  if (!cachedAuth) {
    cachedAuth = getAuth(getFirebaseAdminApp());
  }

  return cachedAuth;
}

export function getAdminDb(): Firestore {
  if (!cachedDb) {
    cachedDb = getFirestore(getFirebaseAdminApp());
  }

  return cachedDb;
}
