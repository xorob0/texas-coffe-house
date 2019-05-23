import React from "react"

import { Welcome } from "../components/dumb/welcome"
import { Quote } from "../components/dumb/quote"
import { Preview } from "../components/dumb/preview"

import { COFFEE, FOOD, FIDELITY } from "../constants/paths"

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
    <Preview text="See our coffees" path={COFFEE} />
    <Preview text="See our food" path={FOOD} />
    <Preview text="Go to the fidelity app" path={FIDELITY} />
  </>
)

export default IndexPage
