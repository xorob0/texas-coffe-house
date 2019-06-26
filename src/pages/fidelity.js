import React, { useState, useEffect, useContext } from "react"
import { Helmet } from "react-helmet"
import firebase, { signOut } from "../utils/firebase"
import styled from "styled-components"

import UserContext from "../userContext"

import Layout from "../components/layout"
import { BlackBoard } from "../components/dumb/board"
import { QRCode } from "../components/QRCode"
import { PrivateRoute } from "../components/privateRoute"
import { Welcome } from "../components/dumb/welcome"

const Points = styled.h2`
  font-family: Rye;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  color: #ffffff;
`

const QRContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`

const IndexPage = ({ location }) => {
  const { user, setUser } = useContext(UserContext)
  const [points, setPoints] = useState(user.points || 0)

  useEffect(() => {
    const ref = firebase.database().ref(user.uid)
    ref.on("value", snapshot => setPoints(snapshot.val().total))
  })

  useEffect(() => {
    navigator.vibrate(200)
    // setUser({ ...user, points })
  }, [points])

  return (
    <Layout location={location}>
      <PrivateRoute location={location}>
        <Helmet title="Texas Coffee House - Our Food" defer={false}>
          <html lang="en-us" />
          <meta
            name="description"
            content="The Website of the Texas Coffe House, a café in Mons, Belgium"
          />
          <meta
            name="keywords"
            content="coffee, cafe, waffles, food, mons, belgium, bergen, belgique"
          />
        </Helmet>
        <Welcome title="Your fidelity points" />
        <BlackBoard first={true}>
          <Points>
            You have {points} point{points > 1 ? "s" : ""}
          </Points>
          <QRContainer>
            <QRCode value={user.uid || ""} />
          </QRContainer>
        </BlackBoard>
      </PrivateRoute>
    </Layout>
  )
}

export default IndexPage
