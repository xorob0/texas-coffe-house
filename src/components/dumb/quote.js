import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled.blockquote`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  max-width: 60vw;
`

const Author = styled.p`
  width: 100%;
  font-family: Source Sans Pro;
  font-style: italic;
  font-weight: 300;
  font-size: 48px;
  line-height: 60px;
  text-align: right;

  color: #555555;
`

//TODO externalize
const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1)

export const Quote = ({ text, author }) => (
  <Wrapper>
    <Text>{`” ${text} ”`}</Text>
    <Author>{`- ${capitalizeFirstLetter(author)}`}</Author>
  </Wrapper>
)
