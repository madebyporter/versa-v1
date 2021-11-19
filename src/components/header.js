import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import logo from "../images/mbp-logo.svg"

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 className="header-logo">
      <Link to="/"><img src={logo} alt="Logo" /></Link>
    </h1>
    <h2 className="t-36 header-content">
      Made by Porter
    </h2>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
