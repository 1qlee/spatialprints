import React from "react"
import { Link, graphql } from "gatsby"

import { Content } from "../components/content"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Input } from "../components/form"
import { Catalog, CatalogItems, CatalogContent } from "../components/catalog"

const ProductsPage = ({ data }) => {
  const calculateGridRowEnd = imageHeight => {
    const gridRowEnd = Math.floor((imageHeight / 1.33 + 150) / 32)
    console.log(gridRowEnd)
    return gridRowEnd
  }

  return (
    <Layout>
      <SEO title="Products" />
      <Content className="is-catalog">
        <h1>Materials</h1>
        <p>Take a look at our product gallery by browsing the categories below.</p>
        <p><b>NOTE:</b> These product photos only depict works we have completed in the past and do not represent our full range of capability. Please inquire about any ideas that you may have.</p>
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
