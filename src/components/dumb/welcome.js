import React from "react"
import styled from "styled-components"

import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { Menu } from "./menu"

const H1 = styled.h1`
  font-family: Lily Script One;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 132px;
  text-align: center;
  margin: 0;
  z-index: 10;

  color: #d3d3d3;
`

const H2 = styled.h2`
  font-family: Lily Script One;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 132px;
  text-align: center;
  margin: 0;
  z-index: 10;

  color: #d3d3d3;
`

const Description = styled.h2`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  margin: 0;
  max-width: 50vw;
  z-index: 10;

  color: #d3d3d3;
`

const Line = styled.div`
  z-index: 10;
  border: 5px solid #d3d3d3;
  transform: rotate(0.28deg);
  width: 25vw;
  margin: 20px;
`

const BackgroundNoStyle = ({ children }) => (
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
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const Background = styled(BackgroundNoStyle)`
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export const Welcome = ({ title, subtitle, description }) => (
  <Background>
    {/* TODO: constant folder */}
    <Menu items={["Cafés", "Food", "Promos", "Fidelité"]} />

    {title && <H1>{title}</H1>}
    {subtitle && <H2>{subtitle}</H2>}
    {description && (
      <>
        <Line />
        <Description>{description}</Description>
      </>
    )}
  </Background>
)
