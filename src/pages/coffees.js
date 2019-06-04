import React from "react"

import { Welcome } from "../components/dumb/welcome"
import { Board } from "../components/dumb/board"
import Layout from "../components/layout"

const ITEMS = [
  { name: "John ayne", description: "When Hot meet Cold", price: "3,5" },
  { name: "John Wayne", description: "When Hot meet Cold", price: "3,5" },
  { name: "John Wayne", description: "When Hot meet Cold", price: "3,5" },
  { name: "John Wayne", description: "When Hot meet Cold", price: "3,5" },
  { name: "John Wayne", description: "When Hot meet Cold", price: "3,5" },
  { name: "John Wayne", description: "When Hot meet Cold", price: "3,5" },
  { name: "John Wayne", description: "When Hot meet Cold", price: "3,5" },
  {
    name: "John Wayne",
    description: "When Hot meet ColdWhen Hot meet ColdWhen Hot meet Cold",
    price: "3,5",
  },
  { name: "John Wayne", description: "When Hot meet Cold", price: "3,5" },
  { name: "John Wayne", description: "When Hot meet Cold", price: "3,5" },
  { name: "John Wayne", description: "When Hot meet Cold", price: "3,5" },
  { name: "John Wayne", description: "When Hot meet Cold", price: "3,5" },
  { name: "John Wayne", description: "When Hot meet Cold", price: "3,5" },
]

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Welcome
      title="Our Coffees"
      description="Try the John Wayne! It’s an exeperience !"
    />
    <Board items={ITEMS} title="Our cold coffees" first={true} />
    <Board items={ITEMS} title="Our hot coffees" />
  </Layout>
)

export default IndexPage
