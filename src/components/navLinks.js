import * as React from "react"
// import { Link } from "gatsby"
import { motion } from "framer-motion"

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 2,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20},
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      ease: "easeOut",
    }
  }
}

const NavbarLinks = () => {
  return (
    <>
      <motion.div className="nav-section" variants={container} initial="hidden" animate="show">
        <motion.h3 className="nav-section-header" variants={item}>Site Links</motion.h3>
        <motion.a className="nav-link" href="#" variants={item}>Internal Page One</motion.a>
        <motion.a className="nav-link" href="#" variants={item}>Internal Page Two</motion.a>
   
        <motion.h3 className="nav-section-header" variants={item}>External Links</motion.h3>
        <motion.a className="nav-link nav-link-external" href="#" target="_blank" variants={item}>External Link One</motion.a>
        <motion.a className="nav-link nav-link-external" href="#" target="_blank" variants={item}>External Link Two</motion.a>
        <motion.a className="nav-link nav-link-external" href="#" target="_blank" variants={item}>External Link Three</motion.a>
      </motion.div>
    </>
  )
}

export default NavbarLinks