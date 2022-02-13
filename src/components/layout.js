/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Navbar from "./navGlobal"

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

  const shadeInit = {
    visible: {
      opacity: 1, y: 0
    },
    hidden: {
      opacity: 0, y: 0, transitionEnd: {display: "none"},
      transition: {
        ease: "easeInOut", duration: 0.7, delay: 1
      }
    }
  }

  return (
    <>
      <motion.div className="site-cover off" variants={shadeInit} initial="visible" animate="hidden" />

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="main">{children}</main>
      <footer className="footer g-align-items-center">
        <nav className="nav nav-horz t-18 g-m-1-13 g-t-1-13 g-l-4-13 g-4-13">
          <h4 className="footer-content">Learn More</h4>
          <a href="https://www.dribbble.com/madebyporter/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'dribbble']} /></a>
          <a href="https://linkedin.com/in/madebyporter/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        </nav>
      </footer>
      
      <Navbar />
      <Cursor />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
