/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="main">{children}</main>
      <footer className="footer g-align-items-center">
        <div className="footer-content t-18 g-4-5">Follow Me</div>
        <nav className="nav-horz t-18 g-5-13">
          <a href="https://www.twitter.com/madebyporter"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          <a href="https://www.instagram.com/madebyporter"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          <a href="https://www.dribbble.com/madebyporter"><FontAwesomeIcon icon={['fab', 'dribbble']} /></a>
          <a href="https://www.linkedin.com/madebyporter"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        </nav>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
