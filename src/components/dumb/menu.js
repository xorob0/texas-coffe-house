import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const itemStyle = {
  fontFamily: "Purple Purse",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "24px",
  lineHeight: "30px",
  listStyle: "none",

  textDecoration: "none",
  color: "#d3d3d3",
}

const itemStyleActive = {
  ...itemStyle,
  textDecoration: "underline",
}

const List = styled.div`
  width: 50%;
  min-width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  background: linear-gradient(
    180deg,
    rgba(33, 33, 33, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  padding-top: 10px;
`

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1)

export const Menu = ({ items }) => (
  <Wrapper>
    <List>
      {items.map(item => (
        <Link
          key={item}
          style={itemStyle}
          activeStyle={itemStyleActive}
          to={`/${item}/`}
        >
          {capitalizeFirstLetter(item)}
        </Link>
      ))}
    </List>
  </Wrapper>
)
