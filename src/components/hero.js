import * as React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

const parentAni = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      duration: 0.5,
      ease: "easeOut",
      delay: 0.5
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const childAni = {
  visible: { opacity: 1},
  hidden: { opacity: 0},
}

const Hero = ({ heroText, heroDesc, isVisible }) => (
  <section className="block block-hero">
    <motion.div className="block-content g-m-1-13 g-l-4-12 g-4-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={parentAni}>
      <motion.h2 className="block-header" variants={childAni}>{heroText}</motion.h2>
      <motion.p className="block-post t-36" variants={childAni}>{heroDesc}</motion.p>
    </motion.div>
  </section>
)

Hero.propTypes = {
  heroText: PropTypes.string,
  heroDesc: PropTypes.string,
}

Hero.defaultProps = {
  heroText: ``,
  heroDesc: ``,
}

export default Hero
