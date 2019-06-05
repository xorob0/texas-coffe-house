import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Welcome } from "../components/dumb/welcome"
import { Board } from "../components/dumb/board"
import Layout from "../components/layout"

const FoodPage = ({ location, data }) => {
  const { edges: items } = data.allMarkdownRemark
  const pasterys = items
    .map(item => item.node.frontmatter)
    .filter(item => item.type === "pastery")
  const superbowls = items
    .map(item => item.node.frontmatter)
    .filter(item => item.type === "superbowl")
  const waffles = items
    .map(item => item.node.frontmatter)
    .filter(item => item.type === "waffle")

  return (
    <Layout location={location}>
      <Welcome
        title="Our Coffees"
        description="Try the John Wayne! It’s an exeperience !"
      />
      <Board items={pasterys} title="Our pastery" first={true} />
      <Board items={superbowls} title="Our superbowl" />
      <Board items={waffles} title="Our waffles" />
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
