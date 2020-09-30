import React from "react"
import styled from "styled-components"

import ArrowLeftIcon from "../assets/feather/arrow-left.svg"
import ArrowRightIcon from "../assets/feather/arrow-right.svg"
import ChevronDownIcon from "../assets/feather/chevron-down.svg"

const StyledIcon = styled.span`
  align-items: center;
  border-radius: 100%;
  display: inline-flex;
  height: ${props => props.height};
  justify-content: center;
  position: relative;
  width: ${props => props.width};
  svg {
    height: ${props => props.height};
    width: ${props => props.height};
  }
`

function Icon(props) {
  switch(props.icon) {
    case "ArrowLeft":
      return (
        <StyledIcon className="icon" height={props.height} width={props.width}>
          <ArrowLeftIcon />
        </StyledIcon>
      )
    case "ArrowRight":
      return (
        <StyledIcon className="icon" height={props.height} width={props.width}>
          <ArrowRightIcon />
        </StyledIcon>
      )
    case "ChevronDown":
      return (
        <StyledIcon className="icon" height={props.height} width={props.width}>
          <ChevronDownIcon />
        </StyledIcon>
      )
    default:
      return (
        <StyledIcon>

        </StyledIcon>
      )
  }
}

export default Icon
