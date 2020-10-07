import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import colors from "../styles/colors"

const ImageWrapper = styled.figure`
  position: relative;
  text-align: center;
  height: ${props => props.height ? props.height : "auto"};
  width: ${props => props.width ? props.width : "100%"};
  &.images-enter {
    opacity: 0;
    transform: scale(0.98);
  }
  &.images-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.2s, transform 0.2s;
  }
  &.images-exit {
    opacity: 1;
    transform: scale(0.98);
  }
  &.images-exit-active {
    opacity: 0;
    transform: scale(1);
  }
  &.has-shadow {
    .gatsby-image-wrapper {
      filter: drop-shadow(0 2px 8px ${colors.shadow.inset});
    }
  }
  .gatsby-image-wrapper {
    transition: box-shadow 0.2s;
    height: ${props => props.height ? props.height : "100%"};
    width: ${props => props.width ? props.width : "100%"};
  }
`

const Image = (props) => {
  const handleDrag = () => {
    return false
  }

  if (props.fluid) {
    return (
      <ImageWrapper className={props.className} width={props.width} height={props.height}>
        <Img
          fluid={props.fluid}
          imgStyle={{objectFit: props.objectFit}}
          draggable={props.draggable}
          dragStart={() => console.log('dragging')}
          loading={props.loading}
         />
      </ImageWrapper>
    )
  }
  else if (props.fixed) {
    return (
      <ImageWrapper className={props.className} width={props.width} height={props.height}>
        <Img
        fixed={props.fixed}
        imgStyle={{objectFit:"cover"}}
        draggable={props.draggable}
        loading={props.loading}
        dragStart={() => console.log('dragging')} />
      </ImageWrapper>
    )
  }
  else {
    return null
  }
}

export default Image
