importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-database.js")

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

const ref = firebase.database().ref("notif")
ref.on("value", snapshot => console.log(snapshot))
console.log(ref)
