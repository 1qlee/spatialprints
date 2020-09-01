import React, { useState, useRef } from "react"
import styled, { keyframes } from "styled-components"
import colors from "../styles/colors"

import { Button } from "./button"
import Tag from "./tag"
import Image from "./image"

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const StyledTray = styled.div`
  -webkit-overflow-scrolling: touch;
  align-items: center;
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 1px 1px 4px 1px ${colors.shadow.float};
  bottom: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-x: auto;
  position: fixed;
  width: 1500px;
  z-index: 1;
  &::-webkit-scrollbar {
    height: 0.75em;
    width: 1em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.gray.fourHundred};
  }
  figure {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`

const TrayImageHeader = styled.h4`
  font-family: "Josefin Sans";
  font-weight: 400;
  letter-spacing: 1px;
`

const TrayImageContent = styled.div`
  user-select: none;
  p {
    color: red;
    user-select: none;
    &.is-available {
      color: green;
    }
  }
`

const TrayImageWrapper = styled.div`
  align-items: center;
  border-top: 2px solid transparent;
  display: flex;
  flex: 0 0 auto;
  padding: 1rem;
  position: relative;
  transition: border-color 0.2s, transform 0.2s;
  height: 100px;
  will-change: transform;
  width: 300px;
  z-index: 99;
  .gatsby-image-wrapper {
    transition: transform 0.2s;
    will-change: transform;
    img {
      user-select: none;
    }
  }
  &.is-selected {
    border-color: ${colors.primary.sixHundred};
  }
  &:hover {
    background-color: ${colors.gray.twoHundred};
    .gatsby-image-wrapper {
      transform: scale(1.05);
    }
  }
`

const FadeBlock = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: -2px;
  padding: 0.2rem;
  z-index: 9;
  filter: blur(4px);
  height: 100px;
  -webkit-filter: blur(4px);
  background: rgba(0,0,0,0.6);
  transition: background 0.2s;
  &.invisible {
    background: transparent;
    visibility: hidden;
  }
`

function FadeShit(props) {
  if (props.toggle > 0) {
    return (
      <FadeBlock />
    )
  }
  else {
    return (
      <FadeBlock className="invisible"/>
    )
  }
}

function Tray({ allProducts, setCurrentProduct, currentProduct }) {
  const trayRef = useRef()
  const [mouseDown, setMouseDown] = useState(false)
  const [startX, setStartX] = useState(null)
  const [scrollLeft, setScrollLeft] = useState(null)
  const [current, setCurrent] = useState(null)

  function handleMouseDown(e) {
    trayRef.current.style.cursor = "grabbing"
    setMouseDown(true)
    setStartX(e.pageX - trayRef.current.offsetLeft)
    setScrollLeft(trayRef.current.scrollLeft)
  }

  function handleMouseLeave() {
    setMouseDown(false)
  }

  function handleMouseUp() {
    trayRef.current.style.cursor = "pointer"
    setMouseDown(false)
  }

  function handleMouseMove(e) {
    if (!mouseDown) {
      trayRef.current.style.cursor = "pointer"
      return
    }
    trayRef.current.style.cursor = "grabbing"
    e.preventDefault()
    const x = e.pageX - trayRef.current.offsetLeft
    const diff = x - startX
    setCurrent(trayRef.current.scrollLeft)
    trayRef.current.scrollLeft = scrollLeft - diff
  }

  function handleClick(e, index) {
    const currentMaterial = e.currentTarget.dataset.product
    setCurrentProduct(index)
  }

  return (
    <StyledTray ref={trayRef} onMouseDown={e => handleMouseDown(e)} onMouseLeave={() => handleMouseLeave()} onMouseUp={() => handleMouseUp()} onMouseMove={e => handleMouseMove(e)}>
      {allProducts.edges.map(({ node: product }, index) => (
        <TrayImageWrapper key={product.productId} className={`${currentProduct === index ? "is-selected" : ""}`} onClick={e => handleClick(e, index)} data-product={product.title}>
          <Image className="has-shadow" fluid={product.images[0].fluid} height="65px" width="65px" draggable={false} />
          <TrayImageContent>
            <TrayImageHeader>{product.title}</TrayImageHeader>
            <p className={product.availability === "In Stock" ? "is-available" : null}>{product.availability}</p>
          </TrayImageContent>
        </TrayImageWrapper>
      ))}
    </StyledTray>
  )
}


export default Tray
