import React from "react"
import styled, { keyframes } from "styled-components"

import ArrowLeftIcon from "../assets/feather/arrow-left.svg"
import ArrowRightIcon from "../assets/feather/arrow-right.svg"
import ChevronDownIcon from "../assets/feather/chevron-down.svg"
import HomeIcon from "../assets/feather/home.svg"
import ContrastIcon from "../assets/ikonate/contrast.svg"
import HandIcon from "../assets/ikonate/pan.svg"

const shake = keyframes`
  0% {
    transform: rotate(10deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
`

const flash = keyframes`
  0% {
    stroke: crimson;
  }
  50% {
    stroke: mediumseagreen;
  }
  100% {
    stroke: dodgerblue;
  }
`

const StyledIcon = styled.span`
  align-items: center;
  background-color: ${props => props.background};
  border-radius: 0.5rem;
  display: inline-flex;
  justify-content: center;
  padding: 0.25rem;
  position: relative;
  &.shake {
    svg {
      animation: ${shake} 0.5s linear infinite alternate;
    }
  }
  &.flash {
    svg {
      animation: ${flash} 2s linear infinite alternate;
    }
  }
  svg {
    height: ${props => props.height};
    width: ${props => props.height};
    fill: ${props => props.color};
  }
`

function Icon(props) {
  switch(props.icon) {
    case "ArrowLeft":
      return (
        <StyledIcon className="icon" height={props.height} width={props.width} background={props.background} color={props.color} padding={props.padding}>
          <ArrowLeftIcon />
        </StyledIcon>
      )
    case "ArrowRight":
      return (
        <StyledIcon className="icon" height={props.height} width={props.width} background={props.background} color={props.color} padding={props.padding}>
          <ArrowRightIcon />
        </StyledIcon>
      )
    case "ChevronDown":
      return (
        <StyledIcon className="icon" height={props.height} width={props.width} background={props.background} color={props.color} padding={props.padding}>
          <ChevronDownIcon />
        </StyledIcon>
      )
    case "Hand":
      return (
        <StyledIcon className="icon shake" height={props.height} width={props.width} background={props.background} color={props.color} padding={props.padding}>
          <HandIcon />
        </StyledIcon>
      )
    case "Contrast":
      return (
        <StyledIcon className="icon flash" height={props.height} width={props.width} background={props.background} color={props.color} padding={props.padding}>
          <ContrastIcon />
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
