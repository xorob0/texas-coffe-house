import React from "react"
import { Helmet } from "react-helmet"

import { Welcome } from "../components/dumb/welcome"

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
