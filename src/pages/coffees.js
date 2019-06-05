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

const IndexPage = ({ location, data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout location={location}>
      <Welcome
        title="Our Coffees"
        description="Try the John Wayne! It’s an exeperience !"
      />
      <h1>{frontmatter.title}</h1>
      <Board items={ITEMS} title="Our cold coffees" first={true} />
      <Board items={ITEMS} title="Our hot coffees" />
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
      }
    }
  }
`
