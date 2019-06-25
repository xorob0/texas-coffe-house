import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import { Welcome } from "../components/dumb/welcome"
import { Board } from "../components/dumb/board"


const FoodPage = ({ location, data }) => {
  const { edges: items } = data.allMarkdownRemark
  console.log("items", items)
  const studentPromos = items
    .map(item => item.node.frontmatter)
    .filter(item => item.type === "for students")
  const weeklyPromo = items
    .map(item => item.node.frontmatter)
    .filter(item => item.type === "weekly")

  return (
    <Layout location={location}>
      <Welcome
        title="Our Promotions"
        description="For the cowboys on low budgets"
      />
      <Board items={studentPromos} title="Student promotions" first={true} />
      <Board items={weeklyPromo} title="Our promotion of the week" />
    </Layout>
  )
}

export default location => (
  <StaticQuery
    query={graphql`
      query PromoPageQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___title] }
          filter: { frontmatter: { templateKey: { eq: "promo" } } }
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
