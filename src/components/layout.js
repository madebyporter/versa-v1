/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Cursor from './cursor';

import "../styles/site.scss"

import Header from "./header"

library.add(fab);

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Cursor />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="main">{children}</main>
      <footer className="footer g-align-items-center">
        <nav className="nav nav-horz t-18 g-m-1-13 g-t-1-13 g-l-3-13 g-4-13">
          <h4 className="footer-content">Learn More</h4>
          <Link to="https://www.twitter.com/madebyporter/" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></Link>
          <Link to="https://www.instagram.com/madebyporter/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></Link>
          <Link to="https://www.dribbble.com/madebyporter/" target="_blank"><FontAwesomeIcon icon={['fab', 'dribbble']} /></Link>
          <Link to="https://linkedin.com/in/madebyporter/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></Link>
        </nav>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
