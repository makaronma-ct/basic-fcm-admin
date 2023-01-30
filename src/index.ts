import { config } from "dotenv";
import { credential } from "firebase-admin";
import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import { inspect } from "util";

import msg from "./msg";

config();

const app =
  getApps().length > 0
    ? getApp()
    : initializeApp({
        credential: credential.cert(process.env.CREDENTIAL_PATH ?? ""),
      });

const messaging = getMessaging(app);

messaging
  .send(msg)
  .then((messageID) => {
    console.log("message sent!");
    console.log({ messageID });
    console.log(inspect(msg, false, null, true))
  })
  .catch((err) => {
    console.log(err);
  });
