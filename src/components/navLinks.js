import * as React from "react"
import { Link } from "gatsby"

const NavbarLinks = () => {
  return (
    <>
      <div className="nav-section">
        <h3 className="nav-section-header">Porter</h3>
        <Link className="nav-link" to="/bio/">Bio</Link>
        <Link className="nav-link" to="/stack/">Stack</Link>
        <Link className="nav-link" to="/stack/">Writing</Link>
      </div>
      <div className="nav-section">
        <h3 className="nav-section-header">Specialities</h3>
        <Link className="nav-link nav-link-external" to="/bio/">Digital Systems</Link>
        <Link className="nav-link" to="/stack/">Product Design</Link>
        <Link className="nav-link nav-link-external" to="/stack/">Music Production</Link>
        <Link className="nav-link" to="/stack/">Photography</Link>
      </div>
      <div className="nav-section">
        <h3 className="nav-section-header">Products</h3>
        <a href="https://www.thinkversa.com" className="nav-link nav-link-external" target="_blank" rel="noreferrer">Projective</a>
        <a href="https://www.thinkversa.com" className="nav-link nav-link-external" target="_blank" rel="noreferrer">The Beatbox Club</a>
        <a href="https://www.thinkversa.com" className="nav-link nav-link-external" target="_blank" rel="noreferrer">Think Versa</a>
      </div>
    </>
  )
}

export default NavbarLinks