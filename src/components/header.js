import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      padding: `1rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1500,
      }}
    >
      <p style={{ margin: 0 }}>
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
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
