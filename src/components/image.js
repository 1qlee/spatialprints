import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const ImageWrapper = styled.figure`
  position: relative;
  text-align: center;
  height: ${props => props.height ? props.height : "100%"};
  width: ${props => props.width ? props.width : "100%"};
  .gatsby-image-wrapper {
    height: ${props => props.height ? props.height : "100%"};
    width: ${props => props.width ? props.width : "100%"};
  }
`

const Image = (props) => {
  if (props.fluid) {
    return (
      <ImageWrapper width={props.width} height={props.height}>
        <Img fluid={props.fluid} imgStyle={{objectFit:"cover"}} />
      </ImageWrapper>
    )
  }
  else if (props.fixed) {
    return (
      <ImageWrapper width={props.width} height={props.height}>
        <Img fixed={props.fixed} imgStyle={{objectFit:"cover"}} />
      </ImageWrapper>
    )
  }
  else {
    return null
  }
}

export default Image
