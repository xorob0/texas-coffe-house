import React, { Component, createContext, useState } from "react"

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

// class UserProvider extends React.Component {
//   state = {
//     user: {},
//   }

//   setUser = user => {
//     localStorage.setItem("user", JSON.stringify(user))
//     this.setState({ user })
//   }

//   componentDidMount() {
//     // this.setState({ user: JSON.parse(localStorage.getItem("user")) || {}})
//   }

//   render() {
//     const { children } = this.props
//     const { user } = this.state
//     return (
//       <UserContext.Provider
//         value={{
//           user,
//           setUser: this.setUser,
//         }}
//       >
//         {children}
//       </UserContext.Provider>
//     )
//   }
// }

export { UserProvider }
export default UserContext
