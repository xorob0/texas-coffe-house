import React from "react"
import styled from "styled-components"

import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BackgroundImageWrapper = styled(BackgroundImage)`
  height: ${({ size }) => (size === "small" ? "100px" : "100vh")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`

export const Background = ({ children, path, ...props }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImageWrapper
          loading="eager"
          fadeIn="soft"
          fluid={imageData}
          {...props}
        >
          {children}
        </BackgroundImageWrapper>
      )
    }}
  />
)
