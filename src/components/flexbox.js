import React from "react"
import styled from "styled-components"

const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-wrap: ${props => props.flexWrap ? props.flexWrap : "nowrap"};
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : "0"};
  width: ${props => props.width ? props.width : "100%"};
  div {
    &:first-child {
      margin-right: ${props => props.flexDirection === "column" ? "0" : "1rem"};
    }
  }
`

function FlexBox(props) {
  return (
    <StyledFlexBox marginBottom={props.marginBottom} justifyContent={props.justifyContent} flexDirection={props.flexDirection} alignItems={props.alignItems} flexWrap={props.flexWrap}>
      {props.children}
    </StyledFlexBox>
  )
}

export default FlexBox
