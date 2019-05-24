import React from "react"
import { auth, provider } from "../firebase.js"

import { Background } from "../components/dumb/background"
import { Footer } from "../components/dumb/footer"
import { LoginButton } from "../components/dumb/loginButton"

const IndexPage = () => {
  const login = () => {
    auth.signInWithPopup(provider).then(result => {
      console.log(result.user)
    })
  }
  return (
    <>
      <Background>
        <LoginButton
          onClick={() => login()}
          type="google"
          text="Connect with Google"
        />
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
