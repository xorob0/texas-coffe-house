import React from "react"
import { Helmet } from "react-helmet"

import { Welcome } from "../components/dumb/welcome"
import { Quote } from "../components/dumb/quote"
import { Preview } from "../components/dumb/preview"

import { COFFEE, FOOD, FIDELITY } from "../constants/paths"

const IndexPage = () => (
  <>
    <Helmet title="Texas Coffee House" defer={false}>
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
