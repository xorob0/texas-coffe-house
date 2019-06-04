import React from "react"
import styled from "styled-components"
import _QRCode from "qrcode.react"

const StyledQRCode = styled(_QRCode)``
const Wrapper = styled.div`
  background: white;
  padding: 10px;
`

export const QRCode = ({ ...props }) => (
  <Wrapper>
    <StyledQRCode rendreAs="svg" {...props} />
  </Wrapper>
)
