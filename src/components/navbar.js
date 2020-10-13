import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"

import Image from "./image"

const StyledNavbar = styled.nav`
  background: ${colors.white};
  padding: 1rem 0;
  height: 60px;
  max-width: 1500px;
  margin: 0 auto;
  @media only screen and (max-width: 1533px) {
    padding: 1rem;
  }
`

const Navbar = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query navbarQuery {
      allContentfulAsset(filter: {title: {eq: "spatial-prints-logo"}}) {
        edges {
          node {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  `)

  return (
    <StyledNavbar>
      <h4>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            textTransform: `uppercase`,
            color: `black`,
          }}
        >
          <Image height="45px" width="45px" className="has-shadow" objectFit="contain" loading="eager" fluid={data.allContentfulAsset.edges[0].node.fluid} />
        </Link>
      </h4>
    </StyledNavbar>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
