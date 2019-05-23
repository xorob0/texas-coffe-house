import React from "react"

import { Welcome } from "../components/dumb/welcome"
import { Quote } from "../components/dumb/quote"
import { Preview } from "../components/dumb/preview"

const IndexPage = () => (
  <>
    <Helmet title="Texas Coffee House - Promos" defer={false}>
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
      title="Our Coffees"
      description="Try the John Wayne! It’s an exeperience !"
    />
  </>
)

export default IndexPage
