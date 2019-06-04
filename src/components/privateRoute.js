import React, { useContext, useEffect } from "react"
import { navigate } from "gatsby"

import UserContext from "../userContext"

export const PrivateRoute = ({
  children,
  admin = false,
  location: { pathname = "/fidelity/" },
}) => {
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (!user.uid) {
      navigate(`/login/`, {
        state: { redirectUrl: pathname },
      })
      return null
    }

    if (admin && user.uid !== "u0PF4AXxhOQhis8KZ4Yy9NgXfE52") {
      navigate(`/fidelity/`)
      return null
    }
  })

  return <>{children}</>
}
