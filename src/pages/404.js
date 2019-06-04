//TODO tips
import React from "react"

import Layout from "../components/layout"
import { PrivateRoute } from "../components/privateRoute"
import { BlackBoard } from "../components/dumb/board"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <PrivateRoute admin={true} location={location}>
      <BlackBoard first={true}>you found a dead link</BlackBoard>
    </PrivateRoute>
  </Layout>
)

export default IndexPage
