import * as React from 'react'
import PropTypes from "prop-types"
const List = ({ listTitle, children }) => {
  return (
    <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
      <header className="block-content-header grid margin-bottom-medium">
        <h3 className="t-36 block-content-title g-m-1-13 g-t-1-6">{listTitle}</h3>
        <nav className="nav nav-horz status-nav g-m-1-13 g-t-6-13">
          <div className="nav-item">
            <span className="status status-green" />
            <span className="status-label">Green</span>
          </div>
          <div className="nav-item">
            <span className="status status-yellow" />
            <span className="status-label">Yellow</span>
          </div>
          <div className="nav-item">
            <span className="status status-red" />
            <span className="status-label">Red</span>
          </div>
        </nav>
      </header>

      <ul className="list-bordered resume-list">
        {children}
      </ul>
    </div>
  )
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  listTitle: PropTypes.node.isRequired,
}


export default List