importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js")

// Required stuff
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js"
)

workbox.precaching.precacheAndRoute([])

const config = {
  apiKey: "AIzaSyAF0ua8bIh3SVrRW8jmH2aAEKLby08aDEo",
  authDomain: "texas-64dfd.firebaseapp.com",
  databaseURL: "https://texas-64dfd.firebaseio.com",
  projectId: "texas-64dfd",
  storageBucket: "texas-64dfd.appspot.com",
  messagingSenderId: "475572786003",
  appId: "1:475572786003:web:1a32ebcfd88047f1",
}

firebase.initializeApp(config)

const messaging = firebase.messaging()

messaging.usePublicVapidKey(
  "BFBYoAimMiEAZxHYMepcJwnjnjtAZrncRVcSMywx7i-kToZk-er386cAC1yuYEqk2BtOCeXAVlV792Ojcfv4x0M"
)

messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  )
  // Customize notification here
  var notificationTitle = "Background Message Title"
  var notificationOptions = {
    body: "Background Message body.",
  }

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})
