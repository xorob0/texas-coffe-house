import React from "react"
import { auth, provider } from "../firebase.js"

import UserContext from "../userContext"

import { Background } from "../components/dumb/background"
import { Footer } from "../components/dumb/footer"
import { LoginButton } from "../components/dumb/loginButton"

const IndexPage = () => {
  const login = setUser => {
    auth.signInWithPopup(provider).then(result => setUser(result.user))
  }
  return (
    <>
      <Background>
        <UserContext.Consumer>
          {userContext => (
            <LoginButton
              onClick={() => login(userContext.setUser)}
              type="google"
              text="Connect with Google"
            />
          )}
        </UserContext.Consumer>
        <LoginButton type="facebook" text="Connect with Facebook" />
        <LoginButton type="mail" text="Connect with E-Mail" />
        <LoginButton type="main" text="LOGIN" />
        <LoginButton type="ghost" text="REGISTER" />
      </Background>

      <Footer />
    </>
  )
}

export default IndexPage
