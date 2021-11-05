import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <Hero heroText="I’m Chris Porter, indie designer, developer &amp; music producer." />

    <section className="block block-section block-slider">
      <header className="block-header">
        <h3 className="block-header-content">What I’m working on now?</h3>
      </header>
      <div className="block-content">
        
        <div className="slider">
          <div className="slider-position">
            <div className="slider-track">
              <div className="slider-block">

              </div>
              <div className="slider-block">
                
              </div>
              <div className="slider-block">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
