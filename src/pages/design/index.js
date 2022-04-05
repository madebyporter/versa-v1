import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import BlockParagraph from "../../components/blockParagraph"
import SectionTitle from "../../components/sectionTitle"
import ContentResumeDesign from "../../components/contentResumeDesign"

import imgProjectOATeaser from "../../images/cases/organicsalive-2019-teaser-mobile-3.png"
import imgProjectHyrecarTeaser from "../../images/cases/hyrecar-2018-teaser.png"
import imgProjectNovvumTeaser from "../../images/cases/novvum-2021-teaser-2.png"
import imgProjectRHTeaser from "../../images/cases/reactheadless-2021-teaser-2.png"

const IndexPage = () => (
  
  <Layout>
    <Seo title="Design Engineer building systems for creative founders." description="I help design digital systems that improves the lives of early-stage founders &amp; their customers." />

    <Hero heroText="Design Engineer building systems for creative founders." heroDesc="I help design digital systems that improves the lives of early-stage founders &amp; their customers." />

    <section className="block block-section">
      <SectionTitle text="Design Services" />

      <BlockParagraph 
        blockTitle="Systems Design"
        blockContent="You're a Business Founder of a startup or small business with a lack of technical expertise. You're looking to take your system digital with a website or app." 
        blockLinkURL="/systemsdesign"
        blockLinkTitle="Learn more about Systems Design"
      />

      <BlockParagraph 
        blockTitle="Design Systems"
        blockContent="You're a Founding Developer that already has a plan. You're looking for a design framework that can help speed up the building of your website or app." 
        blockLinkURL="/designsystems"
        blockLinkTitle="Check out some Design Systems"
      />

      <div className="block-content grid g-m-1-13 g-l-1-13 g-1-13">
        <div className="g-m-1-13 g-l-4-13 g-4-13">
          <h3 className="t-36 block-content-title margin-bottom-small">Case Studies</h3>
        </div>

        <div className="card-carousel card-carousel-cases grid g-m-1-13 g-l-1-13 g-1-13">
          <div className="card-carousel--track g-m-1-13 g-l-4-13 g-4-13">
            <div className="card card-case-minimal">
              <div className="card--image">
                <img src={imgProjectHyrecarTeaser} alt="HyreCar" />
              </div>
              <div className="card--tagset">
                <span className="card--tag">Case Study</span>
                <span className="card--tag">Product</span>
                <span className="card--tag">Marketplace</span>
              </div>
              <div className="card--content">
                <h3 className="card--title t-24">Hyrecar</h3>
                <p className="card--paragraph t-18">Helping redesign the experience for a LA-based startup that lets customersr rent a car for rideshare and delivery services.</p>
                <Link className="card--link t-18" to="/cases/hyrecar-2018">View Case Study &raquo;</Link>
              </div>
            </div>
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
                <p className="card--paragraph t-18">Helping a Southern California organic cannabis fertilizer brand improve their digital processes &amp; customer experiences.</p>
                <Link className="card--link t-18" to="/cases/organicsalive-2019">View Case Study &raquo;</Link>
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
                <p className="card--paragraph t-18">Helping a remote development agency position their website to attract teams who need technical strategy &amp; execution.</p>
                <Link className="card--link t-18" to="/cases/novvum-2021">View Case Study &raquo;</Link>
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
                <p className="card--paragraph t-18">Helping a remote development agency build a mini-site for a specialized offering that services their e-Commerce clients.</p>
                <Link className="card--link t-18" to="/cases/reactheadless-2021">View Case Study &raquo;</Link>
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
