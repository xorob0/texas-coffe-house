// In your service worker e.g. src/sw.js
// Required stuff
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js"
)
// The plugin will pass the files to cache here
workbox.precaching.precacheAndRoute([])
// Another things
//
const { user } = useContext(UserContext)

const ref = firebase.database().ref(user.uid)
ref.on("value", snapshot => console.log(snapshot.val().total))
