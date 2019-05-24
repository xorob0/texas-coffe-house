import React from "react"

import { Background } from "../components/dumb/background"
import { Footer } from "../components/dumb/footer"
import { LoginButton } from "../components/dumb/loginButton"

const IndexPage = () => (
  <>
    <Background>
      <LoginButton type="google" text="Connect with Google" />
      <LoginButton type="facebook" text="Connect with Facebook" />
      <LoginButton type="mail" text="Connect with E-Mail" />
      <LoginButton type="main" text="LOGIN" />
      <LoginButton type="ghost" text="REGISTER" />
    </Background>

    <Footer />
  </>
)

export default IndexPage
