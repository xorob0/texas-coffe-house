import React, { useContext } from "react"
import { navigate } from "gatsby"

import UserContext from "../userContext"

export const PrivateRoute = ({ children, admin = false, location }) => {
  const { user } = useContext(UserContext)
  if (!user.uid) {
    // If the user is not logged in, redirect to the login page.
    navigate(`/login/`, {
      state: { redirectUrl: location.pathname },
    })
    return null
  }

  if (admin && user.uid !== "u0PF4AXxhOQhis8KZ4Yy9NgXfE52") {
    navigate(`/fidelity/`)
    return null
  }

  return <>{children}</>
}
