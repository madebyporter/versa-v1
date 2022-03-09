import * as React from "react"
import PropTypes from "prop-types"


const SectionTitle = ({ text, isVisible }) => (
  <header className="block-header g-m-1-13 g-1-13">
    <h2 className="t-24 block-header-title g-m-1-13 g-l-4-13 g-4-13">{text}</h2>
  </header>
)

SectionTitle.propTypes = {
  sectionTitle: PropTypes.string,
}

SectionTitle.defaultProps = {
  sectionTitle: ``,
}

export default SectionTitle
