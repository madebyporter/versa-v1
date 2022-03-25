import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import BlockParagraph from "../../components/blockParagraph"
import SectionTitle from "../../components/sectionTitle"
import ContentResumeDesign from "../../components/contentResumeDesign"

import imgProjectOATeaser from "../../images/cases/organicsalive-2019-teaser-mobile-3.png"
import imgProjectNovvumTeaser from "../../images/cases/novvum-2021-teaser-2.png"
import imgProjectRHTeaser from "../../images/cases/reactheadless-2021-teaser-2.png"

const IndexPage = () => (
  
  <Layout>
    <Seo title="Design Engineer creating systems for creative founders." />

    <Hero heroText="Design Engineer creating systems for creative founders."  />

    {/* <section className="block block-section">
      
      <div className="grid block-content g-m-1-13 g-l-4-12 g-4-12">
        <div className="g-m-1-13 g-l-1-6 g-1-6">
          Systems Design
        </div>
        <div className="g-m-1-13 g-l-7-12 g-7-12">
          Design Systems
        </div>
      </div>
    </section> */}

    <section className="block block-section">
      <SectionTitle text="Systems Design" />

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Why you'll need systems design?</h3>
        <p className="t-36">
          You're a founder of a startup or small business looking to scale up your proven business model. You want to spend more time growing the business than tinkering in the design &amp; code. 
        </p>
        <p className="t-24">
          Your goal is to find an expert who can scale up your digital system, improve design usability and improve your results. I help founders by auditing your current system, creating a plan and improving the system. 
        </p>
        <ul className="list-bordered">
          <li className="t-24"><strong>Location:</strong> Remote; Slack for Communication.</li>
          <li className="t-24"><strong>Scheduling:</strong> 4-12 weeks, plus one month of support.</li>
          <li className="t-24"><strong>Deliverable:</strong> Discovery playbook, new website or app &amp; one month of support.</li>
          <li className="t-24"><strong>Qualification:</strong> Most effective for companies already making between $100,000 &amp; $500,000 before profit, with a company size of 1-10 &amp; majority of your sales are generated online.</li>
          <li className="t-24"><strong>Price:</strong> $10,000+, depending on size of project.</li>
        </ul>
      </div>

      <div className="block-content grid g-m-1-13 g-l-1-13 g-1-13">
        <div className="g-m-1-13 g-l-4-13 g-4-13">
          <h3 className="t-36 block-content-title margin-bottom-small">Case Studies</h3>
        </div>

        <div className="card-carousel card-carousel-cases grid g-m-1-13 g-l-1-13 g-1-13">
          <div className="card-carousel--track g-m-1-13 g-l-4-13 g-4-13">
            <div className="card card-case-minimal">
              <div className="card--image">
                <img src={imgProjectOATeaser} alt="Organics Alive Garden" />
              </div>
              <div className="card--tagset">
                <span className="card--tag">Case Study</span>
                <span className="card--tag">Website</span>
                <span className="card--tag">e-Commerce</span>
              </div>
              <div className="card--content">
                <h3 className="card--title t-24">Organics Alive Garden</h3>
                <p className="card--paragraph t-18">Moving an organic cannabis fertilizer brand from Wordpress to Shopify.</p>
                <Link className="t-18" to="/cases/organicsalive-2019">View Case Study &raquo;</Link>
              </div>
            </div>
            <div className="card card-case-minimal">
              <div className="card--image">
                <img src={imgProjectNovvumTeaser} alt="Novvum" />
              </div>
              <div className="card--tagset">
                <span className="card--tag">Case Study</span>
                <span className="card--tag">Website</span>
                <span className="card--tag">Agency</span>
              </div>
              <div className="card--content">
                <h3 className="card--title t-24">Novvum.io</h3>
                <p className="card--paragraph t-18">Redesigning Novvum's website to position them as a dev agency that helps non-technical teams.</p>
                <Link className="t-18" to="/cases/novvum-2021">View Case Study &raquo;</Link>
              </div>
            </div>
            <div className="card card-case-minimal">
              <div className="card--image">
                <img src={imgProjectRHTeaser} alt="ReactHeadless" />
              </div>
              <div className="card--tagset">
                <span className="card--tag">Case Study</span>
                <span className="card--tag">Website</span>
                <span className="card--tag">Agency</span>
              </div>
              <div className="card--content">
                <h3 className="card--title t-24">ReactHeadless.com</h3>
                <p className="card--paragraph t-18">Building a mini-site for Novvum's React Headless Shopify services.</p>
                <Link className="t-18" to="/cases/reactheadless-2021">View Case Study &raquo;</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContentResumeDesign />

      <BlockParagraph 
        blockTitle="How to Get Started?"
        blockContent="Ready to improve your digital system? First contact me by booking time to speak with me. We’ll discuss your plans and figure out whether or not this is a good fit for you." 
        blockLinkURL="https://calendly.com/madebyporter/project"
        blockLinkTitle="Book a Project Chat"
      />
    </section>

    {/* <section className="block block-section">
      <SectionTitle text="Design Systems" />

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Why you'll need a design system?</h3>
        <p className="t-36">
          You’re a founder looking to turn your minimal viable process into a minimal viable product. 
        </p>
        <p className="t-24">
          Your goal is to get your website up quickly or your app design quickly so you can prove if it works in the your market. What you’re looking for is templates you can easily manipulate so you can spend less time building and more time proving. 
        </p>
      </div>

      <div className="block-content grid g-m-1-13 g-l-1-13 g-1-13">

        <div className="card-carousel card-carousel-cases grid g-m-1-13 g-l-1-13 g-1-13">
          <div className="card-carousel--track g-m-1-13 g-l-4-13 g-4-13">
            <div className="card card-case">
              <div className="card--image"></div>
              <div className="card--tagset">
                <span className="card--tag">Website</span>
                <span className="card--tag">Design</span>
                <span className="card--tag">Code</span>
              </div>
              <div className="card--content">
                <h3 className="card--title t-24">Organics Alive Garden</h3>
                <p className="card--paragraph t-18">Moving an organic cannabis fertilizer brand from Wordpress to Shopify.</p>
                <Link className="t-18" to="/cases/organicsalive-2019">View Case Study &raquo;</Link>
              </div>
            </div>
            <div className="card card-case">
              <div className="card--image"></div>
              <div className="card--tagset">
                <span className="card--tag">Website</span>
                <span className="card--tag">Design</span>
                <span className="card--tag">Code</span>
              </div>
              <div className="card--content">
                <h3 className="card--title t-24">Organics Alive Garden</h3>
                <p className="card--paragraph t-18">Moving an organic cannabis fertilizer brand from Wordpress to Shopify.</p>
                <Link className="t-18" to="/cases/organicsalive-2019">View Case Study &raquo;</Link>
              </div>
            </div>
            <div className="card card-case">
              <div className="card--image"></div>
              <div className="card--tagset">
                <span className="card--tag">Website</span>
                <span className="card--tag">Design</span>
                <span className="card--tag">Code</span>
              </div>
              <div className="card--content">
                <h3 className="card--title t-24">Organics Alive Garden</h3>
                <p className="card--paragraph t-18">Moving an organic cannabis fertilizer brand from Wordpress to Shopify.</p>
                <Link className="t-18" to="/cases/organicsalive-2019">View Case Study &raquo;</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="block block-section">
      <SectionTitle text="Design &amp; Code Insights" />

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Why you'll need design insights?</h3>
        <p className="t-36">
          You're either a designer looking to learn new things. Maybe you're a founder looking to understand what's the latest and greatest in the tech industry. Below are my latest design writing and links for you to explore.
        </p>
      </div>

      <div className="block-content grid g-m-1-13 g-l-1-13 g-1-13">

        <div className="card-carousel card-carousel-cases grid g-m-1-13 g-l-1-13 g-1-13">
          <div className="card-carousel--track g-m-1-13 g-l-4-13 g-4-13">
            <div className="card card-case">
              <div className="card--image"></div>
              <div className="card--tagset">
                <span className="card--tag">Website</span>
                <span className="card--tag">Design</span>
                <span className="card--tag">Code</span>
              </div>
              <div className="card--content">
                <h3 className="card--title t-24">Organics Alive Garden</h3>
                <p className="card--paragraph t-18">Moving an organic cannabis fertilizer brand from Wordpress to Shopify.</p>
                <Link className="t-18" to="/cases/organicsalive-2019">View Case Study &raquo;</Link>
              </div>
            </div>
            <div className="card card-case">
              <div className="card--image"></div>
              <div className="card--tagset">
                <span className="card--tag">Website</span>
                <span className="card--tag">Design</span>
                <span className="card--tag">Code</span>
              </div>
              <div className="card--content">
                <h3 className="card--title t-24">Organics Alive Garden</h3>
                <p className="card--paragraph t-18">Moving an organic cannabis fertilizer brand from Wordpress to Shopify.</p>
                <Link className="t-18" to="/cases/organicsalive-2019">View Case Study &raquo;</Link>
              </div>
            </div>
            <div className="card card-case">
              <div className="card--image"></div>
              <div className="card--tagset">
                <span className="card--tag">Website</span>
                <span className="card--tag">Design</span>
                <span className="card--tag">Code</span>
              </div>
              <div className="card--content">
                <h3 className="card--title t-24">Organics Alive Garden</h3>
                <p className="card--paragraph t-18">Moving an organic cannabis fertilizer brand from Wordpress to Shopify.</p>
                <Link className="t-18" to="/cases/organicsalive-2019">View Case Study &raquo;</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </Layout>
)

export default IndexPage
