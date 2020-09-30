import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Navbar from "./navbar"
import "./layout.css"

const LayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  @media only screen and (max-width: 1552px) {
    padding: 0 1rem;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <LayoutWrapper>
        <main>{children}</main>
        <footer>
        </footer>
      </LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
