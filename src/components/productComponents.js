import React, { useState } from "react"
import styled from "styled-components"
import Image from "./image"
import colors from "../styles/colors"

const ProductContainer = styled.div`
  display: flex;
  height: calc(100vh - 169px);
  padding: 1rem 0;
`

const ProductContainerContent = styled.div`
  height: 100%;
  max-width: 480px;
  margin-right: 2rem;
`

const ProductContainerImage = styled.div`
  height: 100%;
  width: calc(100% - 480px);
`

const ProductImageWrapper = styled.figure`
  width: 100%;
  .gatsby-image-wrapper {
    height: calc(100vh - 240px);
  }
`

const ProductDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${colors.gray.fourHundred};
  padding-bottom: 1rem;
`

const ProductDetailsHeading = styled.h1`
  margin-bottom: 0 !important;
  text-transform: capitalize;
  flex: 3;
`

const ProductDetailsPrice = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  h3 {
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: "Josefin Sans", serif;
    white-space: nowrap;
  }
  p {
    font-size: 1.25rem;
    color: ${colors.green};
  }
  p, h3 {
    margin-bottom: 0;
    text-align: right;
  }
`

function ProductDetails({ productTitle, categoryTitle, price}) {
  return (
    <ProductDetailsWrapper>
      <ProductDetailsHeading>
        {productTitle}
      </ProductDetailsHeading>
      <ProductDetailsPrice>
        <h3>Starting At</h3>
        <p>{price}</p>
      </ProductDetailsPrice>
    </ProductDetailsWrapper>
  )
}

function ProductImage({ currentProduct, allProducts }) {
  return (
    <ProductImageWrapper>
      {allProducts.edges[currentProduct].node.images.map((image, index) => (
        <Image key={index} objectFit="contain" fluid={image.fluid} loading="eager" />
      ))}
    </ProductImageWrapper>
  )
}

export { ProductContainer, ProductContainerContent, ProductContainerImage, ProductDetails, ProductImage }
