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
        <motion.h3 className="nav-section-header" variants={item}>Porter</motion.h3>
        <motion.a className="nav-link" href="/about/" variants={item}>About</motion.a>
        <motion.a className="nav-link" href="/stack/" variants={item}>My Stack</motion.a>
   
        <motion.h3 className="nav-section-header" variants={item}>Products</motion.h3>
        <motion.a className="nav-link nav-link-external" href="https://madebyporter.notion.site/Use-my-Project-Audit-System-550288c2c81b4628a806a0081e8bd601" target="_blank" variants={item}>Project Audit System</motion.a>
        <motion.a className="nav-link nav-link-external" href="https://www.thebeatboxclub.com/producers/madebyporter" target="_blank" variants={item}>Music Library</motion.a>
        <motion.a className="nav-link nav-link-external" href="https://www.thinkversa.com" target="_blank" variants={item}>Think Versa</motion.a>
      </motion.div>
    </>
  )
}

export default NavbarLinks