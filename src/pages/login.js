import React, { useContext, useEffect } from "react"
import { navigate } from "gatsby"
import { auth, googleProvider, facebookProvider } from "../utils/firebase.js"

import UserContext from "../userContext"
import Layout from "../components/layout"

import { Background } from "../components/dumb/background"
import { Footer } from "../components/dumb/footer"
import { LoginButton } from "../components/dumb/loginButton"

const IndexPage = ({ location }) => {
  const { user, setUser } = useContext(UserContext)

  //TODO use constant
  useEffect(
    () =>
      user.uid &&
      navigate(
        location && location.state && location.state.redirectUrl
          ? location.state.redirectUrl
          : "/fidelity/"
      )
  )

  return (
    <Layout location={location}>
      <Background>
        <LoginButton
          onClick={() =>
            auth
              .signInWithPopup(googleProvider)
              .then(result => setUser(result.user))
          }
          type="google"
          text="Connect with Google"
        />
        <LoginButton
          type="facebook"
          text="Connect with Facebook"
          onClick={() =>
            auth
              .signInWithPopup(facebookProvider)
              .then(result => console.log(result) && setUser(result.user))
          }
        />
        {/*        <LoginButton type="mail" text="Connect with E-Mail" />
        <LoginButton type="main" text="LOGIN" />
        <LoginButton type="ghost" text="REGISTER" />
				*/}
      </Background>

      <Footer />
    </Layout>
  )
}

export default IndexPage
