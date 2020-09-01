import React from "react"
import styled from "styled-components"

import ArrowLeftIcon from "../assets/feather/arrow-left.svg"
import ChevronDownIcon from "../assets/feather/chevron-down.svg"

const StyledIcon = styled.span`
  align-items: center;
  border-radius: 100%;
  display: inline-flex;
  height: ${props => props.height};
  justify-content: center;
  position: relative;
  width: ${props => props.width};
  margin-right: 0.25rem;
  svg {
    height: ${props => props.height};
    width: ${props => props.height};
  }
`

function Icon(props) {
  switch(props.icon) {
    case "ArrowLeft":
      return (
        <StyledIcon height={props.height} width={props.width}>
          <ArrowLeftIcon />
        </StyledIcon>
      )
      break
    case "ChevronDown":
      return (
        <StyledIcon height={props.height} width={props.width}>
          <ChevronDownIcon />
        </StyledIcon>
      )
      break
    default:
      return (
        <StyledIcon>

        </StyledIcon>
      )
  }
}

export default Icon
