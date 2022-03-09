// Navbar

import React, { useState } from "react"
import NavbarLinks from "./navLinks"
import { motion } from "framer-motion"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/pro-thin-svg-icons'
import { faBars } from '@fortawesome/pro-thin-svg-icons'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div className="nav-component">
      <div className="nav-trigger" navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen ? <div className="nav-trigger-icon nav-trigger-open" open><FontAwesomeIcon icon={faXmark} /></div> : <div className="nav-trigger-icon nav-trigger-closed"><FontAwesomeIcon icon={faBars} /></div>}
      </div>

      {navbarOpen ? (
        <motion.nav className="nav nav-vert nav-global nav-open" open>
          <NavbarLinks />
        </motion.nav>
        
      ) : (
        <motion.nav className="nav nav-vert nav-global nav-closed">
          <NavbarLinks />
        </motion.nav>
      )}
    </div>
  )
}

export default Navbar
