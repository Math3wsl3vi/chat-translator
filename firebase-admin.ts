import admin from "firebase-admin";
import { initFirestore } from "@auth/firebase-adapter";

let app;


if (!admin.apps.length) {
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"), 
    }),
  });
} else {
  app = admin.app();
}

const adminDb = initFirestore(app);

const adminAuth = admin.auth(app);

export { adminDb, adminAuth };
