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
  // the popup title&body
  notification: {
    title: "Sent from basic-fcm-admin",
    body: "Hello world",
  },

  // data will be passed into the app
  data: {
    title: "titletitle",
    body: "bodybody",
    url: "https://example.com",
    image: "image url",
    sent_at: "Sent at123",
  },

  // send to all devices with topic ['all']
  condition: "'all' in topics",

  /**
   * @ios using "contentAvailable" will wake the slept app up (able to setup backgroundMessageHandler)
   */
  apns: {
    headers: {
      "apns-priority": "5",
    },
    payload: {
      aps: {
        contentAvailable: true,
      },
    },
  },

  android: {

  },
});
