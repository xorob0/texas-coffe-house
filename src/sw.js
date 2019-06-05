// Required stuff
const config = {
  apiKey: "AIzaSyAF0ua8bIh3SVrRW8jmH2aAEKLby08aDEo",
  authDomain: "texas-64dfd.firebaseapp.com",
  databaseURL: "https://texas-64dfd.firebaseio.com",
  projectId: "texas-64dfd",
  storageBucket: "texas-64dfd.appspot.com",
  messagingSenderId: "475572786003",
  appId: "1:475572786003:web:1a32ebcfd88047f1",
}

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js"
)

importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js")

firebase.initializeApp(config)

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  )
  // Customize notification here
  var notificationTitle = "Background Message Title"
  var notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  }

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})
