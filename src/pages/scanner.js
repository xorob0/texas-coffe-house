//TODO tips
import React, { useState } from "react"
import { Helmet } from "react-helmet"

import { changePointsUser } from "../utils/firebase.js"

import Layout from "../components/layout"
import { PrivateRoute } from "../components/privateRoute"
import { BlackBoard } from "../components/dumb/board"

import loadable from "@loadable/component"
const QrReader = loadable(() => import("react-qr-reader"))

const IndexPage = ({ location }) => {
  const [points, setPoints] = useState(0)
  const [add, setAdd] = useState(true)
  const [ok, setOk] = useState(false)

  const updatePoints = uid => {
    setOk(false)
    changePointsUser(uid, points, add)
  }

  return (
    <Layout location={location}>
      <PrivateRoute admin={true} location={location}>
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
              onError={() => alert("Error")}
              style={{ width: "100%" }}
            />
          ) : (
            <>
              <form onSubmit={() => setOk(true)}>
                <input
                  name="points"
                  placeholder={`How many points to ${add ? "add" : "remove"} ?`}
                  value={points}
                  onChange={({ target: { value } }) =>
                    isFinite(value) && setPoints(value)
                  }
                />
                <button>OK</button>
              </form>
              <button onClick={() => setAdd(!add)}>
                {add ? "REMOVE" : "ADD"} POINTS{" "}
              </button>
            </>
          )}
        </BlackBoard>
      </PrivateRoute>
    </Layout>
  )
}

export default IndexPage
