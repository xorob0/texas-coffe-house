import React, { useState, useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import sizes from "react-sizes"
import { signOut } from "../../utils/firebase"
import { navigate } from "gatsby"

import UserContext from "../../userContext"

import Burger from "@animated-burgers/burger-arrow"
import "@animated-burgers/burger-arrow/dist/styles.css"
import "../../styles/burger.css"

export const SlideMenu = styled.div`
  box-shadow: 0 6px 12px 0 rgba(18, 19, 18, 0.27);
  left: ${props => (props.isActive ? "0" : "-100%")};
  width: calc(100% - 60px);
  min-width: 0;
  position: fixed;
  padding-left: 0;
  z-index: 90;
  top: 0;
  bottom: 0;
  margin: 0;
  transition: all 0.275s ease;
  background: #212121;
`

const itemStyle = {
  fontFamily: "Purple Purse",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "24px",
  lineHeight: "30px",
  listStyle: "none",
  maxWidth: "20%",

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
  flex-direction: ${props => (props.mobile ? "column" : "row")};
  justify-content: space-evenly;
`
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: ${props => (props.right ? "100px" : "90vw")};
  right: ${props => (props.right ? "30px" : "")};
  display: flex;
  justify-content: ${props =>
    props.left ? "flex-start" : props.right ? "flex-end" : "center"};
  align-items: flex-start;
  z-index: 20;

  padding-top: 10px;

  margin-right: ${props => (props.right ? "20px" : "")};
`
const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 0;

  background: linear-gradient(
    180deg,
    rgba(33, 33, 33, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`

const BurgerMoving = styled(Burger)`
  left: ${props => (props.isOpen ? "calc(100% - 50px)" : "10px")};
  z-index: 99;
`

export const MobileNavbar = ({ slideMenuOpened, children }) => (
  <SlideMenu isActive={slideMenuOpened}>{children}</SlideMenu>
)

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1)

const _Menu = ({ items, small }) => {
  const [clicked, setClicked] = useState(false)
  const { user, setUser } = useContext(UserContext)
  return (
    <>
      {small ? (
        <>
          <Wrapper left>
            <BurgerMoving
              onClick={() => setClicked(!clicked)}
              isOpen={clicked}
            />
            <MobileNavbar
              slideMenuOpened={clicked}
              toggleSlideMenu={() => setClicked(!clicked)}
            >
              <List mobile>
                {items.map(item => (
                  <Link
                    key={item.text}
                    style={itemStyle}
                    activeStyle={itemStyleActive}
                    to={`/${item.path}/`}
                  >
                    {capitalizeFirstLetter(item.text)}
                  </Link>
                ))}
              </List>
            </MobileNavbar>
          </Wrapper>
        </>
      ) : (
        <Wrapper>
          <List>
            {items.map(item => (
              <Link
                key={item.text}
                style={itemStyle}
                activeStyle={itemStyleActive}
                to={`${item.path}/`}
              >
                {capitalizeFirstLetter(item.text)}
              </Link>
            ))}
          </List>
        </Wrapper>
      )}

      <Wrapper right>
        <Link
          onClick={() => {
            setUser({})
            signOut()
          }}
          to={`login`}
          style={{ ...itemStyle, maxWidth: "100%" }}
        >
          {user.uid ? "Sign out" : "Sign in"}
        </Link>
      </Wrapper>
      <Shadow />
    </>
  )
}

export const Menu = sizes(({ width }) => ({ small: width && width < 900 }))(
  _Menu
)
