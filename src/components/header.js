import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import logo from "../images/mbp-logo.svg"

const Header = ({ siteTitle }) => (
  <header className="header g-align-items-center">
    <h1 className="header-logo g-m-1-3 g-t-1-2">
      <Link to="/"><img src={logo} alt="Logo" /></Link>
    </h1>
    <h2 className="t-36 header-content g-m-1-13 g-t-1-13 g-l-3-13 g-4-13">
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
