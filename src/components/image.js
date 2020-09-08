import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import colors from "../styles/colors"

const ImageWrapper = styled.figure`
  position: relative;
  text-align: center;
  height: ${props => props.height ? props.height : "100%"};
  width: ${props => props.width ? props.width : "100%"};
  border-radius: 0.5rem;
  transition: box-shadow 0.2s;
  &.has-shadow {
    box-shadow: 0 2px 8px ${colors.shadow.float}, 0 -2px 8px ${colors.shadow.float};
  }
  .gatsby-image-wrapper {
    border-radius: 0.5rem;
    height: ${props => props.height ? props.height : "100%"};
    width: ${props => props.width ? props.width : "100%"};
  }
`

const Image = (props) => {
  if (props.fluid) {
    return (
      <ImageWrapper className={props.className} width={props.width} height={props.height}>
        <Img fluid={props.fluid} imgStyle={{objectFit:"cover"}} draggable={props.draggable} onDragStart="return false;" loading={props.loading} />
      </ImageWrapper>
    )
  }
  else if (props.fixed) {
    return (
      <ImageWrapper className={props.className} width={props.width} height={props.height}>
        <Img fixed={props.fixed} imgStyle={{objectFit:"cover"}} draggable={props.draggable} loading={props.loading} />
      </ImageWrapper>
    )
  }
  else {
    return null
  }
}

export default Image
