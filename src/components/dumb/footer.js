import React from "react"
import styled from "styled-components"

import _Android from "../../images/Logos/android.svg"
import _Apple from "../../images/Logos/apple.svg"
import _Facebook from "../../images/Logos/facebook.svg"

const Android = styled(_Android)`
  height: 80px;
  width: 10%;
  margin: 10px;
`
const Apple = styled(_Apple)`
  height: 80px;
  width: 10%;
  margin: 10px;
`
const Facebook = styled(_Facebook)`
  height: 80px;
  width: 10%;
  margin: 10px;
`

const License = styled.p`
  height: 80px;
  width: 100%;
`

const Wrapper = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`

const Main = styled(Wrapper)`
	padding:20px;
`

const Flex = styled(Wrapper)`
  justify-content: flex-end;
`

const Licenses = styled(Wrapper)`
  flex-direction: column;
`

export const Footer = ({ ...props }) => (
  <Main>
		<Licenses>
		<License>© Tout droits réservés - Texas Coffee House
		</License>
		<License>Site développé par Timothée Simon</License>
	</Licenses>
    <Flex>
      <Android />
      <Apple />
      <Facebook />
    </Flex>
  </Main>
)
