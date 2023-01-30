import { BaseMessage, Message } from "firebase-admin/messaging";
import moment from "moment";


const notification: BaseMessage["notification"] = {
  title: "Sent basic-fcm-asd",
  body: "Hello world",
};

const msg: Message = {
  data: {
    id: Date.now().toString(),
    title: "TTIITLE",
    body: "This is body...",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/121px-Rust_programming_language_black_logo.svg.png",
    url: "https://www.apple.com",

    /**
     * to display after receive: moment(data.sent_at).fromNow()
     */
    sent_at: moment().utc().format("YYYY-MM-DDTHH:mm:ssZ"),
  },
  // condition,
  // topic: "article",
  token: "",

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
  android: {
    priority: 'high'
  },

  /**
   * @website
   */
  webpush: {
    fcmOptions:{
      link: "www.linkToRedirectOnPress.com"
    }
  },
};

export default msg;
