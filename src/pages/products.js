import React from "react"
import { Link, graphql } from "gatsby"

import { Content } from "../components/content"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Input } from "../components/form"
import { Catalog, CatalogItems, CatalogContent } from "../components/catalog"

const ProductsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Products" />
      <h1>Materials</h1>
      <Catalog>
        {data.categories.edges.map(({ node: category}) => (
          <CatalogItems key={category.title} style={{ gridRowEnd: `span calc(${Math.floor((category.image.resolutions.height / 1.33) + 150) / 32})` }}>
            <Link to={`/products/${category.title}`}>
              <Image objectFit="contain" fluid={category.image.fluid} />
              <CatalogContent>
                <h4>{category.title}</h4>
                <p>{category.tagline}</p>
              </CatalogContent>
            </Link>
          </CatalogItems>
        ))}
      </Catalog>
    </Layout>
  )
}

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
            resolutions {
              height
            }
          }
        }
      }
    }
  }
`

export default ProductsPage
