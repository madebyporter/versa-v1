import * as React from "react"
import { Link } from "gatsby"


const Block = ({ blockTitle, blockContent, blockLinkURL, blockLinkTitle, isVisible }) => (
  <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
    <h3 className="t-36 block-content-title">{blockTitle}</h3>
    <p className="t-24 block-content-paragraph">
      {blockContent}
    </p>
    <Link className="t-24 block-content-link" to={blockLinkURL}>{blockLinkTitle}</Link>
  </div>
)

export default Block
