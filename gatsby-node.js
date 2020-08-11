const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const productPageTemplate = path.resolve('./src/components/layouts/product.js')

  const createProductPage = product => {
    console.log(product.slug)
    createPage({
      path: `products/${product.slug}`,
      component: productPageTemplate,
      context: {
        slug: product.slug,
        id: product.productId
      },
    })
  }

  return graphql(`
    query productPageQuery {
      allContentfulSpatialPrint {
        edges {
          node {
            slug
            productId
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allContentfulSpatialPrint.edges.forEach(edge => {
      createProductPage(edge.node)
    })
  })

}
