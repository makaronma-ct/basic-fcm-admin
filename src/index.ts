import { config } from 'dotenv';
import { credential } from 'firebase-admin';
import { getApp, getApps, initializeApp } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';

config();

const app =
  getApps().length > 0
    ? getApp()
    : initializeApp({
        credential: credential.cert(process.env.CREDENTIAL_PATH ?? ""),
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
