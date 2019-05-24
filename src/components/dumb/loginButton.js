import React from "react"
import styled from "styled-components"

import _Google from "../../images/Logos/g-google-colors.svg"
import _Facebook from "../../images/Logos/facebook.svg"
import _Mail from "../../images/Logos/email.svg"

const Google = styled(_Google)`
  height: 40px;
  width: 40px;
  margin: 10px;
`
const Facebook = styled(_Facebook)`
  height: 40px;
  width: 40px;
  margin: 10px;
`
const Mail = styled(_Mail)`
  height: 40px;
  width: 40px;
  margin: 10px;
`

const Button = styled.div`
  background: ${props =>
    ["google", "facebook", "mail"].includes(props.type)
      ? "white"
      : props.type === "main"
      ? "#42B8B8"
      : "rgba(0,0,0,0.2)"};
  ${props => props.type === "ghost" && "border: 2px solid #FFFFFF;"}

  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    ["google", "facebook", "mail"].includes(props.type)
      ? "flex-start"
      : "center"};
  align-items: center;
  align-content: center;
  margin: 10px;
  min-height: 50px;
  min-width: 300px;
`

const Text = styled.p`
  margin: 10px;
  font-family: Noto Sans Symbols;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 37px;

  text-align: center;

  color: ${props =>
    ["ghost", "main"].includes(props.type) ? "white" : "black"};
`

//TODO constants
export const LoginButton = ({ type, text, ...props }) => (
  <Button type={type} {...props}>
    {type === "google" && <Google />}
    {type === "facebook" && <Facebook />}
    {type === "mail" && <Mail />}
    <Text type={type}>{text}</Text>
  </Button>
)
