import React from "react"
import { Helmet } from "react-helmet"

import { Footer } from "../components/dumb/footer"

import { PATHS } from "../constants/paths"

const Layout = ({ children, location }) => {
  const path = PATHS.filter(path => path.path === location.pathname)[0]
  const name = path ? ` - ${path.text}` : ""

  return (
    <>
      <Helmet title={`Texas Coffee House${name}`} defer={false}>
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
      {children}
      <Footer />
    </>
  )
}

export default Layout
