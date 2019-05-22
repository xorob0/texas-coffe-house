import React from "react"
import { Link } from "gatsby"

import { Menu } from "../components/dumb/menu"

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <Menu items={["test", "page-2", "test1", "testt"]} />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
