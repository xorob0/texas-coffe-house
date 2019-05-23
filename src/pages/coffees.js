import React from "react"

import { Welcome } from "../components/dumb/welcome"
import { Board } from "../components/dumb/board"

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

const IndexPage = () => (
  <>
    <Welcome
      title="Our Coffees"
      description="Try the John Wayne! It’s an exeperience !"
    />
    <Board items={ITEMS} title="Our cold coffees" first={true} />
    <Board items={ITEMS} title="Our hot coffees" />
  </>
)

export default IndexPage
