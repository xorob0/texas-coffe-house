import React from "react"
import { UserProvider } from "./src/userContext"

import "./src/styles/global.css"

export const onClientEntry = () => {
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

export const wrapRootElement = ({ element }) => (
  <UserProvider>{element}</UserProvider>
)

export const onServiceWorkerUpdateFound = () => {
  const showNotification = () => {
    Notification.requestPermission(result => {
      if (result === "granted") {
        navigator.serviceWorker.ready.then(registration => {
          registration.showNotification("Update", {
            body: "New content is available!",
            icon: "link-to-your-icon",
            vibrate: [200, 100, 200, 100, 200, 100, 400],
            tag: "request",
            actions: [
              // you can customize these actions as you like
              {
                action: console.log("test"), // you should define this
                title: "update",
              },
              {
                action: console.log("ttt"), // you should define this
                title: "ignore",
              },
            ],
          })
        })
      }
    })
  }

  showNotification()
}
