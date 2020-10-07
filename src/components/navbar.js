import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"

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

const Navbar = ({ siteTitle }) => (
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
        {siteTitle}
      </Link>
    </h4>
  </StyledNavbar>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
