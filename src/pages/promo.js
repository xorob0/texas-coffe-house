import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Welcome } from "../components/dumb/welcome"
import { Board } from "../components/dumb/board"
import Layout from "../components/layout"

const PromoPage = ({ location, data }) => {
  const { edges: items } = data.allMarkdownRemark
  const promos = items.map(item => item.node.frontmatter)

  return (
    <Layout location={location}>
      <Welcome
        title="Our promotions"
        description="For broke people wanting the best"
      />
      <Board items={promos} title="Today's Promo" first={true} />
    </Layout>
  )
}

export default location => (
  <StaticQuery
    query={graphql`
      query PromoPageQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___title] }
          filter: { frontmatter: { templateKey: { eq: "promotion" } } }
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
    render={data => <PromoPage data={data} location={location} />}
  />
)
