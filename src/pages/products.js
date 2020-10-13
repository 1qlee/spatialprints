import React from "react"
import { Link, graphql } from "gatsby"
import colors from "../styles/colors"

import { Content } from "../components/content"
import Notification from "../components/notification"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Input } from "../components/form"
import { Catalog, CatalogItems, CatalogContent } from "../components/catalog"

const ProductsPage = ({ data }) => {
  const calculateGridRowEnd = imageHeight => {
    const gridRowEnd = Math.floor((imageHeight / 1.33 + 150) / 32)
    return gridRowEnd
  }

  return (
    <Layout>
      <SEO title="Products" />
      <Content className="is-catalog">
        <h1>Materials</h1>
        <p>Take a look at our product gallery by browsing the categories below.</p>
        <Notification borderColor={colors.primary.sixHundred} background={colors.blueNotificationBackground}>
          <p>Our production is not limited to what you see on this website. Please inquire about any other materials or designs you might have in mind!</p>
        </Notification>
      </Content>
      <Catalog>
        {data.categories.edges.map(({ node: category}) => (
          <CatalogItems key={category.title} style={{ gridRowEnd: `span ${calculateGridRowEnd(category.image.resolutions.height)}` }}>
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
