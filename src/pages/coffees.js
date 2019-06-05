import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Welcome } from "../components/dumb/welcome"
import { Board } from "../components/dumb/board"
import Layout from "../components/layout"

const CoffeesPage = ({ location, data }) => {
  const { edges: items } = data.allMarkdownRemark
  console.log("items", items)
  const hotCoffees = items
    .map(item => item.node.frontmatter)
    .filter(item => item.type === "hot")
  const coldCoffees = items
    .map(item => item.node.frontmatter)
    .filter(item => item.type === "cold")
  return (
    <Layout location={location}>
      <Welcome
        title="Our Coffees"
        description="Try the John Wayne! It’s an exeperience !"
      />
      <Board items={hotCoffees} title="Our cold coffees" first={true} />
      <Board items={coldCoffees} title="Our hot coffees" />
    </Layout>
  )
}

export default location => (
  <StaticQuery
    query={graphql`
      query BlogPageQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___title] }
          filter: { frontmatter: { templateKey: { eq: "coffee" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 40)
              id
              frontmatter {
                title
                description
                price
                templateKey
              }
            }
          }
        }
      }
    `}
    render={data => <CoffeesPage data={data} location={location} />}
  />
)
