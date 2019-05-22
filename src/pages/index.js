import React from "react"
import { Link } from "gatsby"

import { Welcome } from "../components/dumb/welcome"
import { Quote } from "../components/dumb/quote"

const IndexPage = () => (
  <>
    <Welcome
      title="Texas"
      subtitle="- Coffee House -"
      description="Try the John Wayne! It’s an exeperience !"
    />
    <Quote
      text="The best coffee in town and the best John Wayne in the world"
      author="Tim Toum"
    />
  </>
)

export default IndexPage
