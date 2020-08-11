import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Input from "../components/input"
import { Catalog, CatalogSection, CatalogHeader, CatalogItems, CatalogItem } from "../components/catalog"

const ProductsPage = ({ data }) => (
  <Layout>
    <SEO title="Products" />
    <h1>Materials</h1>
    <Input placeholder="Search materials" />
    <Catalog style={{marginTop: `2rem`}}>
      {data.categories.edges.map(({ node: category}) => (
        <CatalogSection>
          <CatalogHeader>
            <h4>{category.title}</h4>
          </CatalogHeader>
          <CatalogItems>
            {data.products.edges.map(({ node: product }) => {
              return (
                product.category == category.title ? (
                  <CatalogItem>
                    <Link to={`/products/${product.slug}`}>
                      <Image fluid={product.thumbnail.fluid} width="250px" height="250px" />
                      <p>{product.title}</p>
                    </Link>
                  </CatalogItem>
                ) : (
                  null
                )
              )
            })}
          </CatalogItems>
        </CatalogSection>
      ))}
    </Catalog>
  </Layout>
)

export const query = graphql`
  query categoriesQuery {
    categories: allContentfulCategory(sort: {fields: [title], order: ASC}) {
      edges {
        node {
          title
        }
      }
    }
    products: allContentfulSpatialPrint(sort: {fields: [title], order: ASC}) {
      edges {
        node {
          title
          category
          slug
          productId
          thumbnail {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default ProductsPage
