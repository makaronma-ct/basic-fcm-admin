import { BaseMessage, Message } from "firebase-admin/messaging";

// data will be passed into the app
const data: BaseMessage["data"] = {
  title: "red",
  body: "bodybody",
  url: "https://example.com",
  image: "image url",
  sent_at: "Sent at123asd",
};

const notification: BaseMessage["notification"] = {
  title: "Sent basic-fcm-asd",
  body: "Hello world",
};

const msg: Message = {
  data,
  // condition,
  topic: "all",
  notification,
  /**
   * @ios using "contentAvailable" will wake the slept app up (able to setup backgroundMessageHandler)
   */
  apns: {
    headers: {
      "apns-priority": "5",
      // 'apns-push-type': 'background', // this make notif slient (no popup)
    },
    payload: {
      aps: {
        contentAvailable: true,
      },
    },
  },

  /**
   * @android
   */
  android: {
    notification: {
      title: notification.title,
      body: notification.body,
      imageUrl: notification.imageUrl,
      priority: "min",
      sticky: true,
    },
    priority: "high",
    fcmOptions: {},
  },

  /**
   * @website
   */
  webpush: {},
};

export default msg;
