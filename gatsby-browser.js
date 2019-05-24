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
