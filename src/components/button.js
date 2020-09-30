import styled from "styled-components"
import colors from "../styles/colors"

const Button = styled.button`
  align-items: center;
  background-color: ${colors.primary.sixHundred};
  border-radius: 0.25rem;
  border: none;
  color: ${colors.white};
  display: inline-flex;
  font-family: "Josefin Sans";
  justify-content: center;
  line-height: 1;
  padding: 1rem;
  text-decoration: none;
  transition: transform 0.2s, background-color 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s;
  white-space: nowrap;
  will-change: transform;
  span {
    & + .icon {
      margin-left: 0.25rem;
    }
  }
  .icon {
    stroke: ${props => props.color};
    & + span {
      margin-left: 0.25rem;
    }
  }
  &:hover {
    cursor: pointer;
    &:not(.is-selected) {
      transform: translateY(-2px);
      box-shadow: 0 3px 8px ${colors.shadow.float};
    }
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
  &:active {
    transform: translateY(0);
    box-shadow: 0 0 0 ${colors.shadow.float};
  }
`

const ButtonLink = styled.button`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s, border 0.2s;
  padding: 0;
  white-space: nowrap;
  span {
    & + .icon {
      margin-left: 0.25rem;
    }
  }
  .icon {
    stroke: ${props => props.color};
    & + span {
      margin-left: 0.25rem;
    }
  }
`

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
