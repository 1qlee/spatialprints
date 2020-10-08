import React, { useState } from "react"
import styled from "styled-components"
import Image from "./image"
import colors from "../styles/colors"

const ProductContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 169px);
  padding: 1rem 0;
  @media only screen and (max-width: 1500px) {
    padding: 1rem;
  }
  @media only screen and (max-width: 875px) {
    flex-direction: column-reverse;
    margin-bottom: 108px;
    min-height: auto;
  }
`

const ProductContainerContent = styled.div`
  height: 100%;
  max-width: 480px;
  margin-right: 2rem;
  @media only screen and (max-width: 1130px) {
    max-width: 400px;
  }
  @media only screen and (max-width: 875px) {
    max-width: 100%;
    margin-bottom: 2rem;
    margin-right: 0;
  }
`

const ProductContainerImage = styled.div`
  height: 100%;
  width: calc(100% - 480px);
  @media only screen and (max-width: 1130px) {
    width: calc(100% - 400px);
  }
  @media only screen and (max-width: 875px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`

const ProductImageWrapper = styled.figure`
  width: 100%;
  .gatsby-image-wrapper {
    height: calc(100vh - 240px);
    @media only screen and (max-width: 875px) {
      height: auto;
    }
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
        <Image key={index} objectFit="contain" fluid={image.fluid} />
      ))}
    </ProductImageWrapper>
  )
}

export { ProductContainer, ProductContainerContent, ProductContainerImage, ProductDetails, ProductImage }
