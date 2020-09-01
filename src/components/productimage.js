import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import colors from "../styles/colors"

const MainProductImage = styled.figure`
  width: 100%;
  .gatsby-image-wrapper {
    height: calc(100vh - 240px);
  }
`

function ProductImage({ currentProduct, allProducts }) {
  return (
    <MainProductImage>
      {allProducts.edges[currentProduct].node.images.map(image => (
        <Img fluid={image.fluid} />
      ))}
    </MainProductImage>
  )
}

export default ProductImage
