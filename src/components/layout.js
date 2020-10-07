import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Navbar from "./navbar"
import "./layout.css"

const LayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: 1500px;
`

const Layout = ({ children, className }) => {
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
      <LayoutWrapper className={className}>
        <main>
          {children}
        </main>
      </LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
