const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const productPageTemplate = path.resolve('./src/components/layouts/product.js')

  const createProductPage = product => {
    console.log(product.title)
    createPage({
      path: `products/${product.title}`,
      component: productPageTemplate,
      context: {
        category: product.title,
      },
    })
  }

  return graphql(`
    query productPageQuery {
      allContentfulCategory {
        edges {
          node {
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allContentfulCategory.edges.forEach(edge => {
      createProductPage(edge.node)
    })
  })

}
