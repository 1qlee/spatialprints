import React from "react"
import styled from "styled-components"

const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-wrap: ${props => props.flexWrap ? props.flexWrap : "nowrap"};
  margin: ${props => props.margin ? props.margin : "0"};
  width: ${props => props.width ? props.width : "100%"};
  div {
    &:not(:last-child) {
      margin-right: ${props => props.flexDirection === "column" ? "0" : "1rem"};
      margin-bottom: ${props => props.flexDirection === "column" ? "1rem" : "0"};
    }
  }
`

function FlexBox(props) {
  return (
    <StyledFlexBox margin={props.margin} justifyContent={props.justifyContent} flexDirection={props.flexDirection} alignItems={props.alignItems} flexWrap={props.flexWrap} width={props.width}>
      {props.children}
    </StyledFlexBox>
  )
}

export default FlexBox
