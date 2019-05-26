import React from "react"
import styled from "styled-components"
import _QRCode from "qrcode.react"

const StyledQRCode = styled(_QRCode)``

export const QRCode = ({ ...props }) => (
  <StyledQRCode rendreAs="svg" {...props} />
)
