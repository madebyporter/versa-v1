import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import BlockParagraph from "../../components/blockParagraph"

import oahomepage from "../../images/cases/organicsalive-2019-homepage.png"
import oahomepagemobile from "../../images/cases/organicsalive-2019-homepage-mobile.png"
import oaproductdetailmobile from "../../images/cases/organicsalive-2019-productdetail-mobile.png"

const CasePage = () => (
  
  <Layout>
    <Seo 
      title="Case Study: Organics Alive" 
      description="A case study on how we moved Organics Alive from WooCommerce to Shopify to improve processes."
      image={oahomepage}
    />

    <Hero heroText="Organics Alive" heroDesc="A case study on how we moved Organics Alive from WooCommerce to Shopify to improve processes."  />

    <section className="block block-section padding-top-none">
      <div className="block-portfolio block-portfolio-desktop g-m-1-13">
        <img className="block-portfolio-img" src={oahomepage} alt="Portfolio" />  
      </div>
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Shopify Development &amp; Consulting</h3>
        <p className="t-36">Our goal here was to move Organics Alive from WooCommerce to Shopify. <Link to="https://www.creativepollinator.com/" target="_blank" rel="noreferrer">Jennie McGuirk</Link> created the design direction &amp; branding. I helped setup the Shopify system, pages &amp; processes.</p>
        <Link className="t-36" to="https://www.organicsalivegarden.com" target="_blank" rel="noreferrer">View Website</Link>
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
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Setup the System</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Created a new Shopify account, configured store details, users, payment, checkout, shipping, delivery &amp; notifications.</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Setup store layout</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Installed theme, adjusted CSS styles to match layout &amp; adjusted Liquid templates to tinker with store logic.</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Setup functionality &amp; automation</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Integrated Mailchimp for email marketing automation; Integrated GoAffPro for affiliate marketing; Integrated Metafields Guru for product page customization; Integrated Store Locator to map distributors.</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Test &amp; Ship</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Tested the site on modern browsers &amp; devices; Integrated Google Analytics &amp; Shipped within two months.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="block-portfolio block-portfolio-mobile-two g-m-1-13">
        <img className="block-portfolio-img" src={oahomepagemobile} alt="Portfolio" />  
        <img className="block-portfolio-img" src={oaproductdetailmobile} alt="Portfolio" />  
      </div>

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <header className="block-content-header grid">
          <h3 className="t-36 block-content-title g-m-1-13 g-t-1-7">Results</h3>
        </header>
        
        <ul className="list-bordered resume-list">
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Sales</li>
              <li className="t-18 g-m-1-7 g-t-1-7 g-l-1-7 g-5-10">
                $250,000 <small>(2021)</small>
                <span className="data-change dc-up">Up 25% y/y</span>
              </li>
              <li className="t-18 g-m-7-13 g-t-7-13 g-l-7-13 g-10-13">$200,000 <small>(2020)</small></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Sessions</li>
              <li className="t-18 g-m-1-7 g-t-1-7 g-l-1-7 g-5-10">
                36,713 <small>(2021)</small>
                <span className="data-change dc-down">Dn 10% y/y</span>
              </li>
              <li className="t-18 g-m-7-13 g-t-7-13 g-l-7-13 g-10-13">40,829 <small>(2020)</small></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Conversion Rate</li>
              <li className="t-18 g-m-1-7 g-t-1-7 g-l-1-7 g-5-10">
                2.53% <small>(2021)</small>
                <span className="data-change dc-up">Up 24% y/y</span>
              </li>
              <li className="t-18 g-m-7-13 g-t-7-13 g-l-7-13 g-10-13">2.05% <small>(2020)</small></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Returning Customers</li>
              <li className="t-18 g-m-1-7 g-t-1-7 g-l-1-7 g-5-10">
                34.51% <small>(2021)</small>
                <span className="data-change dc-up">Up 58% y/y</span>
              </li>
              <li className="t-18 g-m-7-13 g-t-7-13 g-l-7-13 g-10-13">21.9% <small>(2020)</small></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Testimonial</h3>
        <blockquote className="blockquote t-24">
          "It runs smoothly. We do about 250k with zero advertising!"
          <p className="t-18"><em>- Todd Salemi, Founder &amp; President of Organics Alive</em></p>
        </blockquote>
        
        <Link className="t-18" to="https://www.organicsalivegarden.com" target="_blank" rel="noreferrer">View Website</Link>
      </div>

      <BlockParagraph 
        blockTitle="Ready to improve your website's experience?"
        blockContent="First contact me by booking time to speak with me. We’ll discuss your plans and figure out whether we'll be able to improve your product together." 
        blockLinkURL="https://calendly.com/madebyporter/project"
        blockLinkTitle="Book a Project Chat"
      />
    </section>

    
  </Layout>
)

export default CasePage
