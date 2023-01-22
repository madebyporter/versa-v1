import * as React from "react"
import { Link } from "gatsby"
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

        <motion.h3 className="nav-section-header" variants={item}>Disciplines</motion.h3>
        <motion.div className="nav-link" variants={item}>
          <a href="/design/">Design Engineering</a>
        </motion.div>
        <motion.div className="nav-link" variants={item}>
          <a className="nav-link nav-link-external" href="https://www.thebeatboxclub.com/producers/madebyporter" target="_blank">Music Production</a>
        </motion.div>
   
        <motion.h3 className="nav-section-header" variants={item}>Person</motion.h3>
        
        <motion.div className="nav-link" variants={item}>
          <a href="/stack/">Stack</a>
        </motion.div>
        <motion.div className="nav-link" variants={item}>
          <a href="/about/">About</a>
        </motion.div>

      </motion.div>
    </>
  )
}

export default NavbarLinks