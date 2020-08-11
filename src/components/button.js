import React, { useState } from "react"
import styled from "styled-components"
import colors from "../styles/colors"

const Button = styled.button`
  align-items: center;
  background-color: ${colors.primary.sixHundred};
  border-radius: 0.5rem;
  border: none;
  color: ${colors.white};
  display: inline-flex;
  justify-content: center;
  line-height: 1;
  padding: 1rem;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  white-space: nowrap;
  .icon {
    stroke: ${props => props.color};
  }
  &:hover {
    cursor: pointer;
  }
  &.is-inverted {
    background-color: ${colors.white};
    color: ${colors.primary.sixHundred};
    border: 3px solid ${colors.primary.sixHundred};
    font-weight: 700;
    &:hover {

    }
  }
  &.is-outlined {
    background-color: ${colors.white};
    color: ${colors.gray.eightHundred};
    border: 1px solid ${colors.gray.sixHundred};
    border-radius: 0;
  }
  &.is-small {
    padding: 0.5rem;
  }
  &.is-fullwidth {
    width: 100%;
  }
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
    margin-right: -1px;
    margin-bottom: -1px;
    min-width: 98px;
  }
`

export { Button, ButtonWrapper }
