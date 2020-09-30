import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ siteTitle }) => (
  <nav
    style={{
      background: `white`,
      padding: `1rem`,
      height: `60px`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1500,
      }}
    >
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
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
