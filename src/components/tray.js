import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import colors from "../styles/colors"

import { Button } from "./button"
import Tag from "./tag"
import Image from "./image"

const StyledTray = styled.div`
  -webkit-overflow-scrolling: touch;
  align-items: center;
  box-shadow: 1px 1px 4px 1px ${colors.shadow.float};
  bottom: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-x: auto;
  max-width: 1500px;
  position: fixed;
  background: ${colors.white};
  margin: 0 auto;
  z-index: 1;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    height: 2px;
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
  @media only screen and (max-width: 875px) {
    max-width: 100%;
    width: 100%;
  }
`

const TrayImageHeader = styled.h4`
  color: ${colors.gray.eightHundred};
  font-family: "Crimson Pro";
  margin-bottom: 0.25rem;
  font-weight: 400;
  text-transform: capitalize;
`

const TrayImageContent = styled.div`
  user-select: none;
  p {
    user-select: none;
    line-height: 1.5;
    &.is-green {
      color: ${colors.green};
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
  &.is-dragging {
    pointer-events: none;
    user-select: none;
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
  @media only screen and (max-width: 875px) {
    width: 200px;
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
  const [dragging, setDragging] = useState(false)
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
    setDragging(false)
    setMouseDown(false)
  }

  function handleMouseUp() {
    trayRef.current.style.cursor = "pointer"
    setDragging(false)
    setMouseDown(false)
  }

  function handleMouseMove(e) {
    if (!mouseDown) {
      trayRef.current.style.cursor = "pointer"
      return
    }
    setDragging(true)
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
        <TrayImageWrapper
          key={product.title}
          href={`#` + product.slug}
          className={`
            ${currentProduct === index ? "is-selected" : ""}
            ${dragging ? "is-dragging" : ""}
          `}
          draggable="false"
          onClick={e => handleClick(e, index)}
          data-product={product.title}>
          {product.thumbnail.fluid && (
            <Image className="has-shadow" fluid={product.thumbnail.fluid} objectFit="cover" height="65px" width="65px" draggable={false} loading="eager"/>
          )}
          <TrayImageContent>
            <TrayImageHeader>{product.title}</TrayImageHeader>
            <p className="is-green">{product.price}</p>
          </TrayImageContent>
        </TrayImageWrapper>
      ))}
    </StyledTray>
  )
}


export default Tray
