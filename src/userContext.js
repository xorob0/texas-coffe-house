import React, { createContext, useState } from "react"

const UserContext = createContext({ user: {}, setUser: () => {} })

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  )

  const _setUser = user => {
    localStorage.setItem("user", JSON.stringify(user))
    setUser(user)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: _setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider }
export default UserContext
