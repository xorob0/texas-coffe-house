//TODO tips
import React, { useState, useEffect, useContext } from "react"
import { navigate } from "gatsby"
import { Helmet } from "react-helmet"
import firebase from "../firebase.js"
import loadable from "@loadable/component"

import UserContext from "../userContext"

import { BlackBoard } from "../components/dumb/board"

const QrReader = loadable(() => import("react-qr-reader"))

const IndexPage = () => {
  const [points, setPoints] = useState(0)
  const [add, setAdd] = useState(true)
  const [ok, setOk] = useState(false)
  const { user } = useContext(UserContext)

  const updatePoints = uid => {
    const total = add ? getPoints(uid) + points : getPoints() - points
    const itemsRef = firebase.database().ref(uid)
    itemsRef.update({ total })
    alert("done")
    setOk(false)
  }

  useEffect(() => {
    //TODO: test uid admin
    //TODO: redirect last page
    !user.uid && navigate("/login/")
  })

  const getPoints = uid => {
    const itemsRef = firebase.database().ref(uid)
    return itemsRef.on("value", snapshot => snapshot.val().points)
  }

  // onScan={data => updatePoints(data)}
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
            onScan={data => updatePoints(data)}
            style={{ width: "100%" }}
          />
        ) : (
          <>
            <form onSubmit={() => setOk(true)}>
              <input
                type="number"
                name="points"
                placeholder={`How many points to ${add ? "add" : "remove"} ?`}
                onChange={({ target: { value } }) => setPoints(value)}
                value={points}
              />
              <button>OK</button>
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
