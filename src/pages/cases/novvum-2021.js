import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/pro-solid-svg-icons'
import { faCircleArrowDown } from '@fortawesome/pro-solid-svg-icons'

import novvumDesktopHome from "../../images/cases/novvum-desktop-home.jpg"
import novvumDesktopCareers from "../../images/cases/novvum-desktop-careers.jpg"

const CasePage = () => (
  
  <Layout>
    <Seo 
      title="Case Study: Novvum Website Redesign" 
      description="A case study on how I redesigned Novvum's website in 2021."
      image={novvumDesktopHome}
    />

    <Hero heroText="Novvum Website Redesign" heroDesc="A case study on how I redesigned Novvum's website"  />

    <section className="block block-section padding-top-none">
      <div className="block-portfolio block-portfolio-desktop g-m-1-13">
        <img className="block-portfolio-img" src={novvumDesktopHome} alt="Portfolio" />  
      </div>
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Design for Gatsby Website</h3>
        <p className="t-36">Our goal here was to reposition Novvum as an agency that helps startups that lack technical teams or needed outside consulting for architectural or data problems.</p>
        <Link className="t-36" to="https://www.novvum.io" target="_blank" rel="noreferrer">View Website</Link>
      </div>

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <header className="block-content-header grid">
          <h3 className="t-36 block-content-title g-m-1-13 g-t-1-7">Process</h3>
        </header>
        
        <ul className="list-bordered resume-list">
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Discovery</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Review old site, understand problem, review new design material &amp; connecting the dots.</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Redesigned Website</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Redesigned the homepage, process page, insights page, and book a consultation page.</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Developer Collaboration</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Worked with Novvum's developers to make sure they got all the needed design assets and made sure the site looks as close to the design as possible.</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Test &amp; Ship</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Tested the site on modern browsers &amp; devices; Integrated Google Analytics &amp; and launch.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="block-portfolio block-portfolio-desktop g-m-1-13">
        <img className="block-portfolio-img" src={novvumDesktopCareers} alt="Portfolio" />  
      </div>
    </section>

    
  </Layout>
)

export default CasePage
