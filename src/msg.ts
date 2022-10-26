import { BaseMessage, Message } from "firebase-admin/messaging";

const notification: BaseMessage["notification"] = {
  title: "Sent basic-fcm-asd",
  body: "Hello world",
};

const msg: Message = {
  data: {
    id: "123",
    title: "TTIITLE",
    body: "This is body...",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/121px-Rust_programming_language_black_logo.svg.png",
    url: "https://www.apple.com",
    sent_at: Date.now().toString(),
  },
  // condition,
  topic: "all",

  // send with "notification" payload will cause popup notificaiton,
  // comment this if you want to customize the appearance of notification
  // notification,
  /**
   * @ios using "contentAvailable" will wake the slept app up (able to setup backgroundMessageHandler)
   */
  apns: {
    headers: {
      // "apns-priority": "5",
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
  android: {},

  /**
   * @website
   */
  webpush: {},
};

export default msg;
