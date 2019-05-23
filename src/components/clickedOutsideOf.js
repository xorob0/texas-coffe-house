import React, { useEffect } from "react"

export const ClickOutsideOf = ({ ref, onClickOutside, children }) => {
  let isTouch = false

  useEffect(() => {
    document.addEventListener("touchend", handle, true)
    document.addEventListener("click", handle, true)

    return () => {
      document.removeEventListener("touchend", handle, true)
      document.removeEventListener("click", handle, true)
    }
  })

  const handle = e => {
    if (e.type === "touchend") {
      isTouch = true
    }
    if (e.type === "click" && isTouch) {
      return
    }

    if (ref && !ref.contains(e.target)) {
      onClickOutside(e)
    }
  }

  return <div ref={elem => (ref = elem)}>{children}</div>
}
