# basic-fcm-admin

## Reference

* <https://github.com/makaronma/esbuild-ts-starter>

* <https://www.youtube.com/watch?v=WtYzHTXHBp0&ab_channel=Firebase>

* <https://firebase.google.com/docs/cloud-messaging/concept-options#setting-the-priority-of-a-message>

## message data example

```ts
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
```