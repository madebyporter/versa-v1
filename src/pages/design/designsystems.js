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

    <Hero heroText="Design systems for Creative Founders" heroDesc="You're a creative with a plan. You're looking to ship quickly and need a design framework to speed up building your website or app." />

    <section className="block block-section">
      <SectionTitle text="Design Systems" />

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Why you'll need design systems?</h3>
        <p className="t-36">
          You’re a founder looking to turn your minimal viable process into a minimal viable product. 
        </p>
        <p className="t-24">
          Your goal is to prove if your business model works, aka Product Market Fit. You'll need to get your website or app up quickly so you'll waste less time &amp; money. How you'll launch quickly is with templates &amp; frameworks you can easily manipulate so you can spend less time building from scratch. 
        </p>
      </div>

      <div className="block-content grid g-m-1-13 g-l-1-13 g-1-13">
        <div className="g-m-1-13 g-l-4-13 g-4-13">
          <h3 className="t-36 block-content-title margin-bottom-small">Templates for Commercial Use</h3>
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
          </div>
        </div>
      </div>
      
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">As a designer that codes, my goal is to:</h3>
        <ul className="list-bordered">
          <li className="t-24">Design minimal interfaces with an emphasis on typography and imagery.</li>
          <li className="t-24">Write clean, module code that's easy to understand and build on.</li>
          <li className="t-24">Keep websites lean for fast load times.</li>
          <li className="t-24">Use the latest standards for design &amp; code.</li>
          <li className="t-24">Minimal tech debt to keep costs low for founders.</li>
        </ul>
      </div>

    </section>
  </Layout>
)

export default IndexPage
