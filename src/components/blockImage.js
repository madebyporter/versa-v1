import * as React from 'react'
const BlockImage = ({ blockImageSrc, blockImageAlt, blockImageCaption, blockImageBG }) => {
  return (
    <div className="block-portfolio block-portfolio-desktop g-m-1-13" style={{backgroundImage: 'url(' + blockImageBG + ')', backgroundSize: 'cover'}}>
      <img className="block-portfolio-img" src={blockImageSrc} alt={blockImageAlt} />
      <div className="block-portfolio-img-caption">{blockImageCaption}</div>
    </div>
  )
}
export default BlockImage