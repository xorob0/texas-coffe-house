import React, { useState } from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import { Background } from "./background"

const Button = styled(Link)`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 60px;
  text-align: center;

  text-decoration: none;
  background: #8c6a41;
  color: white;
  padding: 10px;
  border-radius: 14px;
`

export const Preview = ({ path, text }) => (
  <Background>
    <Button to={path}>{text}</Button>
  </Background>
)
