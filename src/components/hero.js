import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"

const Hero = ({ heroText, heroDesc }) => (
  <section className="block block-hero">
    <div className="block-content g-m-1-13 g-l-3-12 g-4-12">
      <h2 className="block-header">{heroText}</h2>
      <p className="block-post t-36">{heroDesc}</p>
    </div>
  </section>
)

Hero.propTypes = {
  heroText: PropTypes.string,
  heroDesc: PropTypes.string,
}

Hero.defaultProps = {
  heroText: ``,
  heroDesc: ``,
}

export default Hero
