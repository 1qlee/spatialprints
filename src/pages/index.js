import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: `flex`, alignItems: `center`, padding: `160px 0` }}>
      <div style={{ maxWidth: `500px` }}>
        <h1>These aren't your ordinary displays</h1>
        <Link to="/products/">
          <a style={{ marginTop: `1rem`, display: `inline-flex`, borderRadius: `4px`, backgroundColor: `#000`, color: `white`, alignItems: `center`, padding: `8px`, whiteSpace: `nowrap`, textDecoration: `none` }}>Browse</a>
        </Link>
      </div>
      <div style={{ height: `300px`, width: `300px`, background: `#ff8080`, position: `relative` }}>
        <div style={{ height: `200px`, width: `200px`, background: `#8080ff`, position: `absolute`, top: `20%`, left: `70%` }}>

        </div>
        <div style={{ height: `200px`, width: `200px`, background: `#80ff80`, position: `absolute`, top: `70%`, left: `20%` }}>

        </div>
      </div>
    </div>
    <div style={{ padding: `160px 1rem`, backgroundColor: '#f1f1f1' }}>
      <h2 style={{ textAlign: `center`, marginBottom: `1rem` }}>What are Spatial Prints?</h2>
      <p>We call this innovative process Spatial Prints™. The Spatial Printing process is revolutionary since there are almost no limitations for choosing materials or substrates in creating displays or signage. With our Spatial Printing technology, we create extraordinary art pieces from ordinary items. Aside from the wide variety of usable materials, Spatial Prints™ allows us to upcycle rather than recycle adding more value to the items that we create.</p>
      <div style={{ display: `flex`, alignItems: `center`, justifyContent: `space-around`, padding: `1rem 0` }}>
        <p>Sustainable</p>
        <p>Limitless</p>
        <p>Made-to-order</p>
        <p>Handmade</p>
      </div>
    </div>
    <div style={{ padding: `160px 0` }}>
      <h2 style={{ textAlign: `center`, marginBottom: `1rem` }}>How it works</h2>
      <div style={{ display: `flex`, alignItems: `center`, marginBottom: `2rem` }}>
        <div style={{ height: `300px`, width: `300px`, background: `#ff8080`, position: `relative`, marginRight: `2rem` }}>

        </div>
        <div style={{ width: `500px` }}>
          <h2 style={{ marginBottom: `1rem` }}>1. Choose your material</h2>
          <p>We offer over a hundred different materials to choose from.</p>
          <p>Don't see something you like? Send us a message and we'll procure something exciting just for you!</p>
        </div>
      </div>
      <div style={{ display: `flex`, alignItems: `center`, marginBottom: `2rem` }}>
        <div style={{ width: `500px` }}>
          <h2 style={{ marginBottom: `1rem` }}>2. Upload your image</h2>
          <p>We'll print your image directly onto a canvas made from your material of choice.</p>
        </div>
        <div style={{ height: `300px`, width: `300px`, background: `#8080ff`, position: `relative`, marginLeft: `2rem` }}>

        </div>
      </div>
      <div style={{ display: `flex`, alignItems: `center`, marginBottom: `2rem` }}>
        <div style={{ height: `300px`, width: `300px`, background: `#80ff80`, position: `relative`, marginRight: `2rem` }}>

        </div>
        <div style={{ width: `500px` }}>
          <h2 style={{ marginBottom: `1rem` }}>3. Receive a quote</h2>
          <p>We will send you a quote for your custom, handmade Spatial Print.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
