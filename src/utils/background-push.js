// In your service worker e.g. src/sw.js
// Required stuff
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js"
)
// The plugin will pass the files to cache here
workbox.precaching.precacheAndRoute([])
// Another things
self.addEventListener("push", function(e) {
  var options = {
    body: "This notification was generated from a push!",
    icon: "images/example.png",
    vibrate: [100, 50, 100],
    actions: [
      {
        action: "explore",
        title: "Explore this new world",
        icon: "images/checkmark.png",
      },
      {
        action: "close",
        title: "Close",
        icon: "images/xmark.png",
      },
    ],
  }
  e.waitUntil(self.registration.showNotification("Hello world!", options))
})
