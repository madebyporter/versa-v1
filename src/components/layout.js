/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import Navbar from "./navGlobal"

import { motion } from "framer-motion"
import Cursor from './cursor'

import "../styles/site.scss"

import Header from "./header"

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
      opacity: 1, y: 0, 
      transition: {
        ease: "easeInOut", duration: 1.2, delay: 0.35
      }
    },
    hidden: {
      opacity: 1, y: -4000,
      transition: {
        ease: "easeInOut", duration: 1.2, delay: 0.35
      },
      transitionEnd: {
        y: 4000,
      },
    },
    exit: {
      delay: 0, opacity: 1, y: 3000,
      transition: {
        ease: "easeInOut", duration: 1.2, 
      }
    },
  }

  return (
    <>
      <Helmet>
        <script src={withPrefix('script.js')} type="text/javascript" />
      </Helmet>
      <motion.div className="site-cover" variants={shadeInit} initial="visible" animate="hidden" exit="visible" />

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="main">{children}</main>
      <footer className="footer g-align-items-center">
        <div className="g-m-1-13 g-t-1-13 g-l-4-13 g-4-13">
          <h3 className="margin-bottom-small subheader">Social Media</h3>
          <nav className="nav nav-horz t-14">
            <a href="https://www.dribbble.com/madebyporter" target="_blank" rel="noreferrer">Dribbble</a>
            <a href="https://www.linkedin.com/in/madebyporter" target="_blank" rel="noreferrer">Linkedin</a>
            <a href="https://www.twitter.com/madebyporter" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://www.instagram.com/madebyporter" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://bitclout.com/u/madebyporter" target="_blank" rel="noreferrer">Deso</a>
            <a href="https://www.github.com/madebyporter" target="_blank" rel="noreferrer">Github</a>
            <a href="https://www.soundcloud.com/madebyporter" target="_blank" rel="noreferrer">Soundcloud</a>
          </nav>
        </div>
        <div className="g-m-1-13 g-t-1-13 g-l-4-13 g-4-13 footer-content">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>  
        </div>
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
