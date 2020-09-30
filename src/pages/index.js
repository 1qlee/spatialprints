import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Content } from "../components/content"
import { Button } from "../components/button"
import Icon from "../components/icon"
import Image from "../components/image"
import SEO from "../components/seo"

import colors from "../styles/colors"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content style={{height: "calc(100vh - 62px)", display: `flex`, alignItems: `center`, flexDirection:`column`, justifyContent: `center`, border: `2px solid ${colors.primary.sixHundred}`}}>
      <div style={{maxWidth:`600px`, padding:`3rem`}}>
        <h1>What is a Spatial Print?</h1>
        <p>Spatial Prints use an innovative printing process with almost no limitation for materials.</p>
        <p>Using this method, we create extraordinary art pieces from ordinary items - transforming any space into an art exhibition.</p>
        <Link to="/products/">
          <Button>
            <span>Discover Our Works</span>
            <Icon icon="ArrowRight" height="16px" width="16px" />
          </Button>
        </Link>
      </div>
    </Content>
  </Layout>
)

export default IndexPage
