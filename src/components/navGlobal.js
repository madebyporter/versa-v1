// Navbar

import React, { useState } from "react"
import { Link } from "gatsby"
import NavbarLinks from "./navLinks"

// const Navigation = styled.nav
// const Toggle = styled.nav
// const Navbox = styled.nav
// const Hamburger = styled.nav

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div className="nav-component">
      <div className="nav-trigger" navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen ? <div className="nav-trigger-icon nav-trigger-open" open /> : <div className="nav-trigger-icon nav-trigger-closed" />}
      </div>

      {navbarOpen ? (
        <nav className="nav nav-vert nav-global nav-open" open>
          <NavbarLinks />
        </nav>
        
      ) : (
        <nav className="nav nav-vert nav-global nav-closed">
          <NavbarLinks />
        </nav>
      )}
    </div>
  )
}

export default Navbar
