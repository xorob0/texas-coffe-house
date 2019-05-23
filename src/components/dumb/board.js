import React, { useState } from "react"
import styled from "styled-components"

import RopeSVG from "../../images/rope.svg"

const Dot = styled.span`
  height: 25px;
  width: 25px;
  background: #1b1b1b;
  border-radius: 50%;
  display: inline-block;
  filter: blur(4px);
  border: 1px solid #353434;
  box-sizing: border-box;
  z-index: 20;

  position: relative;
  top: 5px;
  right: -21.7px;
`

const RopeAlone = styled(RopeSVG)`
  height: 150px;
  width: 18px;
  position: relative;
  top: -3px;
  z-index: 0;
`

const RopeWrapper = styled.div`
  position: absolute;
  ${props => (props.left ? "left" : "right")}: 10%;
  ${props => !props.left && "transform: scale(-1, 1);"}
`

const Rope = ({ ...props }) => (
  <RopeWrapper {...props}>
    <Dot />
    <RopeAlone />
  </RopeWrapper>
)

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const BlackBoard = styled.div`
  background: #303030;
  box-shadow: 2px 2px 2px rgba(255, 255, 255, 0.85),
    inset 2px 2px 2px rgba(255, 255, 255, 0.85);
  margin: 10px;
  margin-top: 100px;
  padding: 40px;
  padding-top: 70px;
`

const Title = styled.h3`
  font-family: Amatic SC;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 61px;
  text-align: center;
  color: #ffffff;
`

const ListWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
	display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
align-content: space-evenly;
`

const ItemWrapper = styled.li`
 max-width: 1000px;
 min-width: 500px;
 display: flex;
flex-direction: row;
margin: 50px;
justify-content: space-between;
align-items: center;
align-content: space-between;
`
const ItemText = styled.p`
	font-family: Amatic SC;
	font-style: normal;
	font-weight: normal;
	margin:10px;

	color: #FFFFFF;
`
const ItemName = styled(ItemText)`
	font-size: 48px;
	line-height: 60px;
	left:0px;
	text-align: left;
`
const ItemDescription = styled(ItemText)`
	font-size: 36px;
	line-height: 45px;
	text-align: left;
	padding-left: 10px;

`
const ItemPrice = styled(ItemText)`
	font-size: 36px;
	line-height: 45px;
`

const Flex = styled.div`
 display: flex;
flex-direction: column;
justify-content: flex-start;
`


const Item = ({ name, description, price }) => (
	<ItemWrapper>
		<Flex>
			<ItemName>{name}</ItemName>
			<ItemDescription>{description}</ItemDescription>
		</Flex>
		<ItemPrice>€{price}</ItemPrice>
	</ItemWrapper>
)

const ItemList = ({ items }) => (
  <ListWrapper>
    {items.map(item => (
      <Item
        name={item.name}
        description={item.description}
        price={item.price}
        key={item.name}
      />
    ))}
  </ListWrapper>
)
const Ropes = () => (
  <Wrapper>
    <Rope left />
    <Rope />
  </Wrapper>
)

export const Board = ({ children, title, items, ...props }) => (
  <>
    <Ropes />
    <BlackBoard {...props}>
      <Title>{title}</Title>
			<ItemList items={items}/>

    </BlackBoard>
  </>
)
