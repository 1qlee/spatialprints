import React, { useState } from "react"
import styled from "styled-components"
import colors from "../styles/colors"

const Button = styled.button`
  align-items: center;
  background-color: ${colors.primary.sixHundred};
  border-radius: 0.25rem;
  border: none;
  color: ${colors.white};
  display: inline-flex;
  justify-content: center;
  line-height: 1;
  padding: 1rem;
  text-decoration: none;
  transition: transform 0.2s, background-color 0.2s, color 0.2s, border 0.2s;
  white-space: nowrap;
  will-change: transform;
  .icon {
    stroke: ${props => props.color};
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 0 0 ${colors.shadow.float};
  }
  &.is-inverted {
    background-color: ${colors.white};
    color: ${colors.primary.sixHundred};
    border: 3px solid ${colors.primary.sixHundred};
    font-weight: 700;
  }
  &.is-outlined {
    background-color: ${colors.white};
    border-radius: 100%;
    border: 2px solid ${colors.gray.fourHundred};
    color: ${colors.gray.eightHundred};
    height: 2.5rem;
    width: 2.5rem;
    &:hover {
      border-color: ${colors.gray.sixHundred};
    }
    &:focus {
      outline: none;
      border-color: ${colors.gray.eightHundred};
    }
    &.is-selected {
      background-color: ${colors.primary.sixHundred};
      color: ${colors.white};
      border-color: ${colors.white};
    }
  }
  &.is-small {
    padding: 0.5rem;
  }
  &.is-fullwidth {
    width: 100%;
  }
`

const ButtonLink = styled.button`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 0.25rem;
  border: none;
  display: inline-flex;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s, border 0.2s;
  white-space: nowrap;
  cursor: pointer;
`

function ButtonTracker(props) {
  const [activeButton, setActiveButton] = useState()

  return (
    <ButtonWrapper onClick={e => setActiveButton(e.target)}>
      {props.children}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  button {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`

export { Button, ButtonWrapper, ButtonLink }
