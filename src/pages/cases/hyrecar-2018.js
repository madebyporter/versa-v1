import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import BlockParagraph from "../../components/blockParagraph"

import hyrecarHero from "../../images/cases/hyrecar-2018-marketplace-desktop.png"
import hyrecarListings from "../../images/cases/hyrecar-2018-carlisting-mobile.png"

const CasePage = () => (
  
  <Layout>
    <Seo 
      title="Case Study: Hyrecar Product Redesign" 
      description="A case study on how Novvum &amp; I teamed up to improve Hyrecar's web app framework."
      image={hyrecarHero}
    />

    <Hero heroText="Hyrecar Product Redesign" heroDesc="A case study on how Novvum &amp; I teamed up to improve Hyrecar's web app framework."  />

    <section className="block block-section padding-top-none">
      <div className="block-portfolio block-portfolio-desktop g-m-1-13">
        <img className="block-portfolio-img-large" src={hyrecarHero} alt="Portfolio" />
        <div className="block-portfolio-img-caption">Hyrecar Driver Marketplace</div>
      </div>
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Growing Pains</h3>
        <ul className="list-bordered">
          <li className="t-24">Their explosive growth led to an unstable software platform and an app that experienced constant outages, resulting in poor user experiences.</li>
          <li className="t-24">The process for renting vehicles and renting out vehicles was cumbersome. The process needed a lot of steps reduced and making the process easy to use.</li>
          <li className="t-24">Design was hard to use on mobile devices</li>
          <li className="t-24">Design was stale and needed a refresh</li>
          <li className="t-24">Sign up and onboarding was so long, there were many people dropping off.</li>
          <li className="t-24">The process to book (or rent out) a car was so cumbersome that people were leaving comments in the app store about how confusing it was.</li>
        </ul>
      </div>

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <header className="block-content-header grid">
          <h3 className="t-36 block-content-title g-m-1-13 g-t-1-7">Process</h3>
        </header>
        
        <ul className="list-bordered resume-list">
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Discovery</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Review old site, understand problem, review new design material &amp; created a plan for infrastructure and design.</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Data Architecture Rebuild</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">The Novvum team initiated a full rebuild of their infrastructure that was scalable, sustainable and could keep up with the high demands of their customers. </li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Redesign User Interface</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Our team went through every screen for signup, renting vehicles and renting out vehicles, got customer feedback and improved their processes.</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Test &amp; Ship</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Tested the site on modern browsers &amp; devices and launched the redesign.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="block-portfolio block-portfolio-desktop g-m-1-13">
        <img className="block-portfolio-img-large" src={hyrecarListings} alt="Portfolio" />  
        <div className="block-portfolio-img-caption">Hyrecar Owner Listing Application</div>
      </div>

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <header className="block-content-header grid">
          <h3 className="t-36 block-content-title g-m-1-13 g-t-1-7">Results</h3>
        </header>
        
        <ul className="list-bordered resume-list">
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">IPO Ready</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">We were able to successfully deliver on our strategy within a three month time frame — just in time for HyreCar’s <a href="https://labusinessjournal.com/technology/hyrecar-set-145-million-ipo/" target="_blank" rel="noreferrer">$14.5 Million IPO</a>.</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Improved Experience</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Since the rebuild, HyreCar has seen a dramatic increase in new drivers and number of cars rented, <a href="https://labusinessjournal.com/technology/hyrecar-increases-revenue-losses-third-quarter/" target="_blank" rel="noreferrer">which grew 84% from Q2 2019 to Q3 2019</a>.</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-start">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Increased Earnings</li>
              <li className="t-18 g-m-1-13 g-t-5-13 g-l-5-13 g-5-13">Following the rebuild and IPO in Q2 2019, Hyrecar recorded <a href="https://ir.hyrecar.com/news-releases/news-release-details/hyrecar-announces-record-second-quarter-results" target="_blank" rel="noreferrer">revenue at $3.8m</a>, compared to $2.3m in 2018, an increase of 67%. Hyrecar also recorded an increase in gross profit of $2.3m, compared to $1.1m in 2018, an increase of 114%.</li>
            </ul>
          </li>
        </ul>
      </div>

      <BlockParagraph 
        blockTitle="Ready to improve your product's experience?"
        blockContent="First contact me by booking time to speak with me. We’ll discuss your plans and figure out whether we'll be able to improve your product together." 
        blockLinkURL="https://calendly.com/madebyporter/project"
        blockLinkTitle="Book a Project Chat"
      />

    </section>

    
  </Layout>
)

export default CasePage
