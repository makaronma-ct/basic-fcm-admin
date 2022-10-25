const { credential } = require("firebase-admin");
const { initializeApp, getApp, getApps } = require("firebase-admin/app");
const { getMessaging } = require("firebase-admin/messaging");
require("dotenv").config();

const app =
  getApps().length > 0
    ? getApp()
    : initializeApp({
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEAUREMENT_ID,
        credential: credential.cert(process.env.CREDENTIAL_PATH),
      });

const messaging = getMessaging(app);
messaging.send({
  notification: {
    title: "$FooCorp up 1.43% on the day",
    body: "$FooCorp gained 11.80 points to close at 835.67, up 1.43% on the day.",
  },
  data: {
    title: "p22",
    body: "body123",
    url: "example.com",
    image: "image123",
    sent_at: "Sent at123",
  },
  condition: "'all' in topics",
});
