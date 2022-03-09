import * as React from "react"


const Block = ({ blockTitle, blockContent, blockLinkURL, blockLinkTitle, isVisible }) => (
  <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
    <h3 className="t-36 block-content-title">{blockTitle}</h3>
    <p className="t-36">
      {blockContent}&nbsp;
      <a href={blockLinkURL} target="_blank" rel="noreferrer">{blockLinkTitle}</a>.
    </p>
  </div>
)

export default Block
