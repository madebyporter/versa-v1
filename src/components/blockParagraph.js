import * as React from "react"
import PropTypes from "prop-types"


const Block = ({ blockTitle, blockContent, blockLinkURL, blockLinkTitle, isVisible }) => (
  <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
    <h3 className="t-36 block-content-title">{blockTitle}</h3>
    <p className="t-36">
      {blockContent}&nbsp;
      <a href={blockLinkURL} target="_blank" rel="noreferrer">{blockLinkTitle}</a>.
    </p>
  </div>
)

Block.propTypes = {
  blockTitle: PropTypes.string,
  blockContent: PropTypes.string,
  blockLinkURL: PropTypes.string,
  blockLinkTitle: PropTypes.string,
}

Block.defaultProps = {
  blockTitle: ``,
  blockContent: ``,
  blockLinkURL: ``,
  blockLinkTitle: ``,
}

export default Block
