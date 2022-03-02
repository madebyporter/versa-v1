import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"

import rhDesktopHomepage from "../../images/cases/reactheadless-desktop-homepage.jpg"
import rhMobileHomepage1 from "../../images/cases/reactheadless-mobile-homepage-1.jpg"
import rhMobileHomepage2 from "../../images/cases/reactheadless-mobile-homepage-2.jpg"
import rhLogo from "../../images/cases/reactheadless-logo.jpg"
import rhDesignSystem from "../../images/cases/reactheadless-designsystem.jpg"

const CasePage = () => (
  
  <Layout>
    <Seo 
      title="Case Study: React Headless Website Design" 
      description="A case study on how I redesigned Novvum's React Headless website in 2021."
      image={rhDesktopHomepage}
    />

    <Hero heroText="Novvum's React Headless Website Redesign" heroDesc="A case study on how I redesigned Novvum's React Headless website"  />

    <section className="block block-section padding-top-none">
      <div className="block-portfolio block-portfolio-desktop g-m-1-13">
        <img className="block-portfolio-img" src={rhDesktopHomepage} alt="Portfolio" />  
      </div>
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Design for Gatsby Website</h3>
        <p className="t-36">Our goal here was to create a separate brands for Novvum and their Shopify e-Commerce clients. Their goal is to help clients with bustling Shopify sites, but the template they're using isn't performing at high speeds. To fix this for clients, Novvum would rebuild their front-end using React and use Shopify as a headless CMS.</p>
        <Link className="t-36" to="https://www.reactheadless.com" target="_blank" rel="noreferrer">View Website</Link>
      </div>

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <header className="block-content-header grid">
          <h3 className="t-36 block-content-title g-m-1-13 g-t-1-7">Process</h3>
        </header>
        
        <ul className="list-bordered resume-list">
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Discovery</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Review their past work with Shopify clients, understand the sales problem Novvum wanted to solve &amp; connect the dots.</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Design the Website</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Created a quick logo, designed the homepage, about page, blog index, blog detail &amp; contact page.</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Developer Collaboration</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Worked with Novvum's developers to make sure they have received all the needed design assets and made sure the site looks as close to the design as possible.</li>
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
        <img className="block-portfolio-img" src={rhLogo} alt="React Headless Logo" />  
      </div>

      <div className="block-portfolio block-portfolio-mobile-two g-m-1-13">
        <img className="block-portfolio-img" src={rhMobileHomepage1} alt="React Headless Mobile Homepage" />  
        <img className="block-portfolio-img" src={rhMobileHomepage2} alt="React Headless Mobile Homepage" />  
      </div>

      <div className="block-portfolio block-portfolio-desktop g-m-1-13">
        <img className="block-portfolio-img" src={rhDesignSystem} alt="React Headless Design System" />  
      </div>
    </section>

    
  </Layout>
)

export default CasePage
