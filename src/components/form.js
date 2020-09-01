import React, { useEffect, useState, useRef } from "react"
import styled, { keyframes } from "styled-components"
import colors from "../styles/colors"

const Form = styled.form`
  display: block;
  margin-bottom: 1rem;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1
    transform: translateX(0);
  }
`

const FormWrapper = styled.div`
  &.form-enter {
    opacity: 0;
    transform: translateX(-100px);
  }
  &.form-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.2s, transform 0.2s;
  }
  &.form-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.form-exit-active {
    opacity: 0;
    transform: translateX(-100px);
  }
`

const Details = styled.div`
  animation: ${fadeIn} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  &.details-enter {
    opacity: 0;
    transform: translateX(100px);
  }
  &.details-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.2s, transform 0.2s;
  }
  &.details-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.details-exit-active {
    opacity: 0;
    transform: translateX(-100px);
    transition: opacity 0.2s, transform 0.2s;
  }
`

const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid ${colors.gray.fourHundred};
  margin-bottom: 1rem;
  width: 100%;
  &:hover {
    border-color: ${colors.gray.sixHundred};
  }
  &:focus {
    outline: 0;
    border-color: ${colors.primary.threeHundred};
  }
`

const Label = styled.label`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.6rem;
  font-weight: 700;
  line-height: 1;
`

const Fieldset = styled.fieldset`
  &.is-flex {
    display: flex;
    align-items: center;
  }
`

const StyledSelect = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  select {
    appearance: none;
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: 1px solid ${colors.gray.fourHundred};
    cursor: pointer;
    &:hover {
      border-color: ${colors.gray.sixHundred};
    }
    &:focus {
      outline: 0;
      border-color: ${colors.primary.threeHundred};
    }
  }
  &.is-focused {
    select {
      border-radius: 0.25rem 0.25rem 0 0;
    }
    &::after {
      transform: rotate(-135deg);
      border-color: ${colors.primary.threeHundred};
    }
  }
  &:hover {
    &.not(.is-focused) {
      &::after {
        border-color: ${colors.gray.sixHundred};
      }
    }
  }
  &::after {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 0.5rem;
    height: 0.5rem;
    content: " ";
    border-width: 0 2px 2px 0;
    border-color: ${colors.gray.sixHundred};
    border-style: solid;
    border-radius: 1px;
    transform: rotate(45deg);
    transition: transform 0.1s, border-color 0.2s;
  }
`

function Select(props) {
  const [isFocused, setIsFocused] = useState(false)
  const node = useRef()

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return
    }

    setIsFocused(false)
  }

  return (
    <StyledSelect ref={node} onClick={e => setIsFocused(!isFocused)} className={`${isFocused ? `is-focused` : ""}`}>
      {props.children}
    </StyledSelect>
  )
}

const Textarea = styled.textarea`
  display: block;
  max-width: 100%;
  min-width: 100%;
  padding: 0.5rem 1rem;
  resize: none;
  border-radius: 0.25rem;
  border: 1px solid ${colors.gray.fourHundred};
  &:hover {
    border-color: ${colors.gray.sixHundred};
  }
  &:focus {
    outline: 0;
    border-color: ${colors.primary.threeHundred};
  }
`

export { Details, Form, FormWrapper, Input, Fieldset, Label, Select, Textarea }
