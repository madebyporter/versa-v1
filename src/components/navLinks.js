import * as React from "react"
import { Link } from "gatsby"

const NavbarLinks = () => {
  return (
    <>
      <div className="nav-section">
        <h3 className="nav-section-header">Porter</h3>
        <Link className="nav-link" to="/about/">About</Link>
        <Link className="nav-link" to="/stack/">Stack</Link>
        {/* <Link className="nav-link" to="/journal/">Journal</Link> */}
      </div>
      {/* <div className="nav-section">
        <h3 className="nav-section-header">Specialities</h3>
        <Link className="nav-link" to="/businesssystems/" target="_blank">Business Systems</Link>
        <Link className="nav-link" to="/designandcode/">Design &amp; Code</Link>
        <Link className="nav-link nav-link-external" to="/musicproduction/">Music Production</Link>
      </div> */}
      <div className="nav-section">
        <h3 className="nav-section-header">Products</h3>
        <Link className="nav-link nav-link-external" to="https://www.ssfn.io" target="_blank">SSFN</Link>
        <Link className="nav-link nav-link-external" to="https://madebyporter.notion.site/Use-my-Project-Audit-System-550288c2c81b4628a806a0081e8bd601" target="_blank">Project Audit System</Link>
        <Link className="nav-link nav-link-external" to="https://www.thebeatboxclub.com/producers/madebyporter" target="_blank">Music Library</Link>
        <Link className="nav-link nav-link-external" to="https://www.thinkversa.com" target="_blank">Think Versa</Link>
      </div>
    </>
  )
}

export default NavbarLinks