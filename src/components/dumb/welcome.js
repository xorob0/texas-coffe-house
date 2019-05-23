// TODO alts images
import React from "react"
import styled from "styled-components"

import { Background } from "./background"
import { Menu } from "./menu"

import { PATHS } from "../../constants/paths"

const H1 = styled.h1`
  font-family: Lily Script One;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  @media (max-width: 700px) {
    font-size: 48px;
  }
  text-align: center;
  margin: 0;
  z-index: 10;
  margin-top: 50px;

  color: #d3d3d3;
`

const H2 = styled.h2`
  font-family: Lily Script One;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  @media (max-width: 700px) {
    font-size: 36px;
  }
  text-align: center;
  margin: 0;
  z-index: 10;

  color: #d3d3d3;
`

const Description = styled(H2)`
  font-family: Source Sans Pro;
  line-height: 60px;
  max-width: 50vw;
`

const Line = styled.div`
  z-index: 10;
  border: 5px solid #d3d3d3;
  transform: rotate(0.28deg);
  width: 25vw;
  margin: 50px;
`

export const Welcome = ({ title, subtitle, description }) => (
  <Background>
    {/* TODO: constant folder */}
    <Menu items={PATHS} />
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
