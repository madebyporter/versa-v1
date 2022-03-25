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

        <motion.h3 className="nav-section-header" variants={item}>Specialties</motion.h3>
        <motion.div className="nav-link" variants={item}>
          <Link to="/design/">Design</Link>
        </motion.div>
        <motion.div className="nav-link" variants={item}>
          <Link to="/stack/">Stack</Link>
        </motion.div>
        <motion.div className="nav-link" variants={item}>
          <Link to="/about/">About</Link>
        </motion.div>
   
        <motion.h3 className="nav-section-header" variants={item}>Products</motion.h3>
        <motion.a className="nav-link nav-link-external" href="https://madebyporter.gumroad.com/l/projective" target="_blank" variants={item}>Projective</motion.a>
        <motion.a className="nav-link nav-link-external" href="https://calendly.com/madebyporter/consulting" target="_blank" variants={item}>Mentorship</motion.a>
        <motion.a className="nav-link nav-link-external" href="https://www.thebeatboxclub.com/producers/madebyporter" target="_blank" variants={item}>Beats</motion.a>
      </motion.div>
    </>
  )
}

export default NavbarLinks