//TODO tips
import React, { useState, useEffect, useContext } from "react"
import { navigate } from "gatsby"
import { Helmet } from "react-helmet"
import firebase from "../firebase.js"
import loadable from "@loadable/component"
const QrReader = loadable(() => import("react-qr-reader"))

import UserContext from "../userContext"

import { BlackBoard } from "../components/dumb/board"

const IndexPage = () => {
  const [clientUID, setClientUID] = useState(0)
  const [points, setPoints] = useState(0)
  const [add, setAdd] = useState(true)
  const [ok, setOk] = useState(false)
  const { user } = useContext(UserContext)

  const handleSubmit = e => {
    e.preventDefault()
    const total = add ? getPoints(clientUID) + points : getPoints() - points
    const itemsRef = firebase.database().ref(clientUID)
    itemsRef.update({ total })
    console.log(itemsRef)
    setOk(true)
  }

  useEffect(() => {
    //TODO: test uid admin
    !user.uid && navigate("/login/")
  })

  const getPoints = uid => {
    const itemsRef = firebase.database().ref(uid)
    return itemsRef.on("value", snapshot => snapshot.val().points)
  }

  return (
    <>
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
        {ok ? (
          <QrReader
            delay={300}
            onScan={data => setClientUID(data)}
            style={{ width: "100%" }}
          />
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                name="points"
                placeholder={`How many points to ${add ? "add" : "remove"} ?`}
                onChange={({ target: { value } }) => setPoints(value)}
                value={points}
              />
              <button onClick={() => handleSubmit()}>OK</button>
            </form>
            <button onClick={() => setAdd(!add)}>
              {add ? "REMOVE" : "ADD"} POINTS{" "}
            </button>
          </>
        )}
      </BlackBoard>
    </>
  )
}

export default IndexPage
