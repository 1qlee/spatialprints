import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import colors from "../../styles/colors"

import { Columns, Column } from "../column"
import { Content, ContentHeader, ContentBlock } from "../content"
import { List, ListItemWrapper, ListItem } from "../list"
import { Button, ButtonWrapper } from "../button"
import Image from "../image"
import Layout from "../layout"
import ProductImages from "../productimages"
import Tag from "../tag"
import Tray from "../tray"

const Product = ({ data }) => {
  const {currentProduct, previousProduct, nextProduct} = data

  return (
    <Layout>
      <Columns>
        <Column width="30%">
          <Content>
            <h1 style={{marginBottom: `1rem`}}>{currentProduct.title}</h1>
            <p>{currentProduct.tagline}</p>
            <ContentBlock>
              <p>Printing</p>
              <p>Inkjet process using CMYK inks.</p>
            </ContentBlock>
            <ContentBlock>
              <p>Material</p>
              {documentToReactComponents(currentProduct.description.json)}
            </ContentBlock>
            <ContentBlock>
              <p>Sizes</p>
              <ButtonWrapper>
                {currentProduct.sizes.map(size => (
                  <Button className="is-outlined">
                    {size}
                  </Button>
                ))}
              </ButtonWrapper>
            </ContentBlock>
            <Button className="is-fullwidth is-inverted">Create Your Own</Button>
          </Content>
        </Column>
        <Column width="70%">
          <ProductImages images={currentProduct.images} thumbnails={currentProduct.thumbnail} />
        </Column>
      </Columns>
      <Tray images={currentProduct.images}></Tray>
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery($slug: String!, $productId: String) {
    currentProduct: contentfulSpatialPrint(slug: { eq: $slug }) {
      title
      tagline
      slug
      productId
      sizes
      thumbnail {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      description {
        json
      }
      data {
        materials {
          name
          availability
        }
      }
    }
    previousProduct: contentfulSpatialPrint(id: { eq: $productId}) {
      title
      slug
    }
    nextProduct: contentfulSpatialPrint(id: { eq: $productId}) {
      title
      slug
    }
  }
`

export default Product
