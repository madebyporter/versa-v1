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
import { motion } from "framer-motion"
import Cursor from './cursor'

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
      <motion.div className="site-cover" initial={{opacity:1, y: 0}} animate={{opacity: 0, y: 0, transitionEnd: {display: "none"} }} transition={{ ease: "easeInOut", duration: 0.7, delay: 1}} />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="main">{children}</main>
      <footer className="footer g-align-items-center">
        <nav className="nav nav-horz t-18 g-m-1-13 g-t-1-13 g-l-3-13 g-4-13">
          <h4 className="footer-content">Learn More</h4>
          <a href="https://www.twitter.com/madebyporter/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          <a href="https://www.instagram.com/madebyporter/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          <a href="https://www.dribbble.com/madebyporter/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'dribbble']} /></a>
          <a href="https://linkedin.com/in/madebyporter/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        </nav>
      </footer>
      <Cursor />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
