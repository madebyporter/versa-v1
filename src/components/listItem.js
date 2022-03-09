import * as React from 'react'
import PropTypes from "prop-types"

const ListItem = ({ title, titleLink, desc, year, status }) => {
  return (
    <li>
      <ul className="list-item-columns g-align-items-end">
        <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4 "><a href={titleLink} target="_blank" rel="noreferrer">{title}</a></li>
        <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">{desc}</li>
        <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">{year}</li>
        <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className={`status status-${status}`} /></li>
      </ul>
    </li>
  )
}


export default ListItem