import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"

import rfhomepage from "../../images/cases/ronfinley-desktop-home.jpg"
import rfprojectmobile from "../../images/cases/ronfinley-mobile-project-1.jpg"
import rfprojectmobile2 from "../../images/cases/ronfinley-mobile-project-2.jpg"

const CasePage = () => (
  
  <Layout>
    <Seo 
      title="Case Study: The Ron Finley Project" 
      description="A case study on how I redesigned Ron Finley's website in 2015."
      image={rfhomepage}
    />

    <Hero heroText="The Ron Finley Project" heroDesc="A case study on how I redesigned Ron Finley's website"  />

    <section className="block block-section padding-top-none">
      <div className="block-portfolio block-portfolio-desktop g-m-1-13">
        <img className="block-portfolio-img" src={rfhomepage} alt="Portfolio" />  
      </div>
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Wordpress Design &amp; Development</h3>
        <p className="t-36">Our goal here was to redesign Ron Finley's website to help improve the brand and usability for the site.</p>
        <Link className="t-36" to="http://web.archive.org/web/20161130072005/http://ronfinley.com/" target="_blank" rel="noreferrer">View Archived Website</Link>
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
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Redesigned the homepage, about page, The Ron Finley Project page, press &amp; media page, and contact page.</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Developed Website</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Installed Wordpress, coded design from scratch, and implemented Wordpress CMS for content updates.</li>
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

      <div className="block-portfolio block-portfolio-mobile-two g-m-1-13">
        <img className="block-portfolio-img" src={rfprojectmobile} alt="Ron Finley Project Page Mobile" />  
        <img className="block-portfolio-img" src={rfprojectmobile2} alt="Ron Finley Project Page Mobile" />  
      </div>
    </section>

    
  </Layout>
)

export default CasePage
