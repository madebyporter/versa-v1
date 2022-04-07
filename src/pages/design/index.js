import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import BlockParagraph from "../../components/blockParagraph"
import BlockParagraphExt from "../../components/blockParagraphExt"
import SectionTitle from "../../components/sectionTitle"
import ContentResumeDesign from "../../components/contentResumeDesign"

import imgProjectOATeaser from "../../images/cases/organicsalive-2019-teaser-mobile-3.png"
import imgProjectHyrecarTeaser from "../../images/cases/hyrecar-2018-teaser.png"
import imgProjectNovvumTeaser from "../../images/cases/novvum-2021-teaser-2.png"
import imgProjectRHTeaser from "../../images/cases/reactheadless-2021-teaser-2.png"

const IndexPage = () => (
  
  <Layout>
    <Seo title="Design Engineering for Business Founders, Designers &amp; Developers." description="Designing and engineering systems for people who like to help other people solve problems." />

    <Hero heroText="Design &amp; Code" heroDesc="Designing and engineering systems for people who like to help other people solve problems." />

    <section className="block block-section">
      <SectionTitle text="Design Services" />

      <article className="block-article g-m-1-13">
        <BlockParagraph 
          blockTitle="Systems Design"
          blockContent="You're a Business Founder of a startup or small business with a lack of technical expertise. You're looking to take your system digital with a website or app. Starting at $10,000 for UI/UX design, design consulting &amp; software engineering." 
          blockLinkURL="/design/systemsdesign"
          blockLinkTitle="Learn more about Systems Design"
        />
      </article>
      
      
      {/* <article className="block-article g-m-1-13">
        <BlockParagraph 
          blockTitle="Design Systems"
          blockContent="You're a Founding Developer that already has a plan. You're looking for a design framework that can help speed up the building of your website or app." 
          blockLinkURL="/design/designsystems"
          blockLinkTitle="Check out some Design Systems"
        />
      </article> */}
      
    </section>

    <section className="block block-section">
      <SectionTitle text="Design Library" />

      <div className="block-content grid g-m-1-13 g-l-1-13 g-1-13">
        <div className="g-m-1-13 g-l-4-13 g-4-13">
          <h3 className="t-36 block-content-title margin-bottom-small">Latest Design Entries</h3>
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

    </section>

    <section className="block block-section">
      <SectionTitle text="Design History" />

      <ContentResumeDesign />

    </section>
  </Layout>
)

export default IndexPage
