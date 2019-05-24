import React, { useState } from "react"
import { Helmet } from "react-helmet"
import firebase from "../firebase.js"

import { BlackBoard } from "../components/dumb/board"

const IndexPage = () => {
  const [points, setPoints] = useState(0)
  const user = "xorob0"

  const handleSubmit = e => {
    e.preventDefault()
    const itemsRef = firebase.database().ref("points")
    const item = {
      points,
      user,
    }
    itemsRef.push(item)
  }

  const update = () => {
    const itemsRef = firebase.database().ref("points")
    itemsRef.on("value", snapshot => {
      setPoints(snapshot.val())
    })
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
        <h2>{points}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="points"
            placeholder="How many points do you want?"
            onChange={({ target: { value } }) => setPoints(value)}
            value={points}
          />
          <button>Change points</button>
        </form>
        <button onClick={() => update()}>update points</button>
      </BlackBoard>
    </>
  )
}

export default IndexPage
