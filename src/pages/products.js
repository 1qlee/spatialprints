import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import { Content } from "../components/content"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Input } from "../components/form"
import { Catalog, CatalogItems } from "../components/catalog"

const ProductsPage = ({ data }) => (
  <Layout>
    <SEO title="Products" />
    <h1>Materials</h1>
    <Catalog style={{marginTop: `2rem`}}>
      {data.categories.edges.map(({ node: category}) => (
        <CatalogItems>
          <Link to={`/products/${category.title}`}>
            <Image fluid={category.image.fluid} width="300px" height="300px" />
            <Content className="catalog-content">
              <p style={{fontWeight:'700',textTransform: 'capitalize'}}>{category.title}</p>
              <p>{category.tagline}</p>
            </Content>
          </Link>
        </CatalogItems>
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
          tagline
          image {
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
