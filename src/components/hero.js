import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Hero = ({ heroText }) => (
  <section className="block block-hero">
    <div className="block-content">
      <h2 className="block-header">{heroText}</h2>
    </div>
  </section>
)

Hero.propTypes = {
  heroText: PropTypes.string,
}

Hero.defaultProps = {
  heroText: ``,
}

export default Hero
