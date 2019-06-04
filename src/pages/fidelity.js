import React, { useState, useEffect, useContext } from "react"
import { Helmet } from "react-helmet"
import firebase from "../utils/firebase"

import UserContext from "../userContext"

import { BlackBoard } from "../components/dumb/board"
import { QRCode } from "../components/QRCode"
import { PrivateRoute } from "../components/privateRoute"

const IndexPage = ({ location }) => {
  const [points, setPoints] = useState(0)
  const { user } = useContext(UserContext)

  useEffect(() => {
    const ref = firebase.database().ref(user.uid)
    ref.on("value", snapshot => setPoints(snapshot.val().total))
  })

  useEffect(() => {
    navigator.vibrate(200)
  }, [points])

  return (
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
      <BlackBoard first={true}>
        <h2>{user.displayName}</h2>
        <h2>{points}</h2>
        <h2>{user.uid}</h2>
        <QRCode value={user.uid} />
      </BlackBoard>
    </PrivateRoute>
  )
}

export default IndexPage
