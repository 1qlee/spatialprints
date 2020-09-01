import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Content } from "../components/content"
import { Button } from "../components/button"
import Image from "../components/image"
import SEO from "../components/seo"

import colors from "../styles/colors"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content style={{height: "calc(100vh - 62px)", display: `flex`, alignItems: `center`, flexDirection:`column`, justifyContent: `center`, border: `2px solid ${colors.primary.sixHundred}`}}>
      <div style={{maxWidth:`530px`, padding:`3rem`, border: `2px solid ${colors.primary.sixHundred}`}}>
        <h1>The New Age of Art</h1>
        <p>Spatial Prints use an innovative printing process with almost no limitation for materials.</p>
        <p>Using this method, we create extraordinary art pieces from ordinary items - transforming any space into an art exhibition.</p>
        <Link to="/products/">
          <Button>Browse</Button>
        </Link>
      </div>
    </Content>
  </Layout>
)

export default IndexPage
