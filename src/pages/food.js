import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import { Welcome } from "../components/dumb/welcome"
import { Board } from "../components/dumb/board"


const FoodPage = ({ location, data }) => {
  const { edges: items } = data.allMarkdownRemark
  console.log("items", items)
  const pasteries = items
    .map(item => item.node.frontmatter)
    .filter(item => item.type === "pastery")
  const superBowl = items
    .map(item => item.node.frontmatter)
    .filter(item => item.type === "superbowl")
  const waffles = items
    .map(item => item.node.frontmatter)
    .filter(item => item.type === "waffle")

  return (
    <Layout location={location}>
      <Welcome
        title="Our Food"
        description="A Waffle a day keeps the doctor away"
      />
      <Board items={pasteries} title="Our pasteries" first={true} />
      <Board items={waffles} title="Our waffles" />
      <Board items={superBowl} title="Our Superbowls" />
    </Layout>
  )
}

export default location => (
  <StaticQuery
    query={graphql`
      query FoodPageQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___title] }
          filter: { frontmatter: { templateKey: { eq: "food" } } }
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
                type
              }
            }
          }
        }
      }
    `}
    render={data => <FoodPage data={data} location={location} />}
  />
)
