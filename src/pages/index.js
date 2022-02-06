import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

import imgPortfolio from "../images/projects-bbx.jpg"
import imgProjectAuditApp from "../images/mbp-projectauditsystem-gumroad--app.png"
import imgProjectAuditBG from "../images/mbp-projectauditsystem-gumroad--bg.jpg"

const pasStyles = {
  backgroundImage: 'url(' + imgProjectAuditBG + ')',
  backgroundSize: 'cover',
};

const IndexPage = () => (
  
  <Layout>
    <Seo title="Minimalist designer &amp; problem solver" />

    <Hero heroText="Helping people design systems with minimalism &amp; data." heroDesc="I am Chris Porter, a seasoned designer, developer &amp; audio producer for entrepreneurs. I enjoy building systems for small businesses &amp; early stage startups."  />

    <section className="block block-section">
      <header className="block-header g-m-1-13 g-1-13">
        <h2 className="t-24 block-header-title g-m-1-13 g-l-4-13 g-4-13">Projects I'm working on right now</h2>
      </header>
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">SSFN</h3>
        <p className="t-36">Co-founded a venture agency with <a href="https://www.stephenlamiller.com" target="_blank"rel="noreferrer">Stephen Miller</a> that designs systems for start-ups, small businesses &amp; solopreneurs. Currently, we’re focused on building a digital system for a transportation &amp; housing company. <a href="https://www.ssfn.io" target="_blank"rel="noreferrer">Visit the site</a>.</p>
      </div>
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Creative Freelance Consulting</h3>
        <p className="t-36">I help teach new freelancers &amp; solopreneurs coming from in-house teams about the aspects of freelancing. You’ll learn how to find clients, negotiate contracts, manage projects &amp; handle your business. <a href="https://calendly.com/madebyporter/consulting" target="_blank"rel="noreferrer">Book a Session</a>.</p>
      </div>

      <div className="block-portfolio block-portfolio-desktop g-m-1-13">
        <img className="block-portfolio-img" src={imgPortfolio} alt="Portfolio" />  
      </div>

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">The Beatbox Club</h3>
        <p className="t-36">As a music producer, I wanted to build a simple way to showcase my production library. Most solutions offered too much, so I build my own solution. Now I want to help other music producers organize their production library. <a href="https://www.thebeatboxclub.com/producers/madebyporter" target="_blank"rel="noreferrer">View my library</a>.</p>
      </div>

      <div className="block-portfolio block-portfolio-desktop g-m-1-13" style={pasStyles}>
        <img className="block-portfolio-img" src={imgProjectAuditApp} alt="The Project Audit System, a Notion template." />  
      </div>

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Product Audit System</h3>
        <p className="t-36">Every quarter, I review all the projects I've worked on and add them to my product audit system. I add in the data and it spits out how cool the project is based on my tastes. You can download my Notion template for it here: <a href="https://madebyporter.notion.site/Use-my-Project-Audit-System-550288c2c81b4628a806a0081e8bd601" target="_blank"rel="noreferrer">Download the Product Audit System</a>.</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
