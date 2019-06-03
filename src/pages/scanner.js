//TODO tips
import React, { useState, useEffect, useContext } from "react"
import { navigate } from "gatsby"
import { Helmet } from "react-helmet"
import firebase from "../firebase.js"
import loadable from "@loadable/component"

import UserContext from "../userContext"

import { BlackBoard } from "../components/dumb/board"

const QrReader = loadable(() => import("react-qr-reader"))

const addSub = (a, b, addition = true) =>
  addition ? parseInt(a) + parseInt(b) : parseInt(a) - parseInt(b)

const IndexPage = () => {
  const [points, setPoints] = useState(0)
  const [add, setAdd] = useState(true)
  const [ok, setOk] = useState(false)
  const { user } = useContext(UserContext)

  const updatePoints = uid => {
    setOk(false)

    const ref = firebase.database().ref(uid)
    ref
      .once("value")
      .then(snapshot => addSub(snapshot.val().total, points, add))
      .then(total => ref.update({ total }))
  }

  useEffect(() => {
    //TODO: test uid admin
    //TODO: redirect last page
    //TODO: backup firebase db
    // TODO : Generalise redirect
    // TODO : Generalise Helmet
    !user.uid && navigate("/login/")
  })

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
            onScan={data => data && updatePoints(data)}
            style={{ width: "100%" }}
          />
        ) : (
          <>
            <form onSubmit={() => setOk(true)}>
              <input
                type="number"
                name="points"
                placeholder={`How many points to ${add ? "add" : "remove"} ?`}
                onChange={({ target: { value } }) => setPoints(parseInt(value))}
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
