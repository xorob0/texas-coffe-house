import React from "react"

import { Welcome } from "../components/dumb/welcome"
import { Quote } from "../components/dumb/quote"
import { Preview } from "../components/dumb/preview"

const IndexPage = () => (
  <>
    <Welcome
      title="Our Coffees"
      description="Try the John Wayne! It’s an exeperience !"
    />
  </>
)

export default IndexPage
