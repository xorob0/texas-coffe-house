import React, { useState } from "react"
import styled from "styled-components"

import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BackgroundImageWrapper = styled(BackgroundImage)`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`

export const Background = ({ children, path, ...props }) => {
  return (
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
          <BackgroundImageWrapper fluid={imageData} {...props}>
            {children}
          </BackgroundImageWrapper>
        )
      }}
    />
  )
}
