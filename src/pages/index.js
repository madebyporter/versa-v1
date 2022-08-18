import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
// import BlockParagraph from "../components/blockParagraph"
import BlockParagraphExt from "../components/blockParagraphExt"
// import BlockImage from "../components/blockImage"
import SectionTitle from "../components/sectionTitle"

import imgProjectOATeaser from "../images/cases/organicsalive-2019-teaser-mobile-3.png"
import imgProjectHyrecarTeaser from "../images/cases/hyrecar-2018-teaser.png"
import imgProjectNovvumTeaser from "../images/cases/novvum-2021-teaser-2.png"
import imgProjectRHTeaser from "../images/cases/reactheadless-2021-teaser-2.png"

import imgMusicDarkWinter from "../images/music/cover-darkwinter.jpg"
import imgMusicNoise from "../images/music/cover-noise.jpg"
import imgMusicIntuition from "../images/music/cover-intuition.jpg"
import imgMusicSensory from "../images/music/cover-sensory19.jpg"
import imgMusicTheScore from "../images/music/cover-thescore.jpg"
import imgMusicHigher from "../images/music/cover-higher.jpg"
import imgMusicFreewayNights from "../images/music/cover-freewaynights.jpg"
import imgMusicCoffeeAndReefer from "../images/music/cover-coffeeandreefer.jpg"

const IndexPage = () => (
  
  <Layout>
    <Seo title="Minimalist designer &amp; problem solver"  />

    <Hero heroText="Helping people design systems with minimalism &amp; data." heroDesc="I am Chris Porter, a seasoned designer, developer &amp; audio producer for entrepreneurs. I enjoy building systems for small businesses &amp; early stage startups."  />

    <section className="block block-section">
      <SectionTitle text="Design Engineer" />

      <BlockParagraphExt 
        blockTitle="Systems Design"
        blockContent="You're a Founder of a startup or small business with an outdated process. You're looking for someone to make your process more efficient. Starting at $10,000/mo, I'll put a team together to help improve your process using software design, web design and software engineering." 
        blockLinkURL="/design/systemsdesign"
        blockLinkTitle="Learn more about Systems Design"
      />

      <div className="block-content grid g-m-1-13 g-l-1-13 g-1-13">
        <div className="g-m-1-13 g-l-4-13 g-4-13">
          <h3 className="t-36 block-content-title margin-bottom-small">Past Work</h3>
        </div>
        <div className="carousel carousel-cases grid g-m-1-13 g-l-1-13 g-1-13">
          <div className="carousel--track g-m-1-13 g-l-4-13 g-4-13">
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
                <p className="card--paragraph t-18">Helping redesign the experience for a LA-based startup that lets customers rent a car for rideshare and delivery services.</p>
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
      <SectionTitle text="Music Producer" />

      <BlockParagraphExt
        blockTitle="The Beatbox Club"
        blockContent="As a music producer, I wanted to build a simple way to showcase my production library. Most solutions offered too much, so I build my own solution. Now I want to help other music producers organize their production library." 
        blockLinkURL="https://www.thebeatboxclub.com/producers/madebyporter"
        blockLinkTitle="View my library"
      />

      <div className="block-content grid g-m-1-13 g-l-1-13 g-1-13">
        <div className="g-m-1-13 g-l-4-13 g-4-13">
          <h3 className="t-36 block-content-title margin-bottom-small">Past Albums</h3>
        </div>
        <div className="carousel carousel-musicAlbums grid g-m-1-13 g-l-1-13 g-1-13">
          <div className="carousel--track g-m-1-13 g-l-4-13 g-4-13">
            <div className="card card-musicAlbums">
              <a className="card--image margin-bottom-small" href="https://thebeatboxclub.com/tapes/darkwinter/">
                <img src={imgMusicDarkWinter} alt="Dark Winter" />
              </a>
              <div className="card--content">
                <h3 className="card--title t-18 margin-bottom-none">Dark Winter</h3>
                <p className="card--paragraph t-14">2021</p>
              </div>
            </div>
            <div className="card card-musicAlbums">
              <a className="card--image margin-bottom-small" href="https://thebeatboxclub.com/tapes/noise/">
                <img src={imgMusicNoise} alt="Noise" />
              </a>
              <div className="card--content">
                <h3 className="card--title t-18 margin-bottom-none">Noise</h3>
                <p className="card--paragraph t-14">2020</p>
              </div>
            </div>
            <div className="card card-musicAlbums">
              <a className="card--image margin-bottom-small" href="https://thebeatboxclub.com/tapes/intuition/">
                <img src={imgMusicIntuition} alt="Intuition" />
              </a>
              <div className="card--content">
                <h3 className="card--title t-18 margin-bottom-none">Intuition</h3>
                <p className="card--paragraph t-14">2020</p>
              </div>
            </div>
            <div className="card card-musicAlbums">
              <a className="card--image margin-bottom-small" href="https://thebeatboxclub.com/tapes/sensory/">
                <img src={imgMusicSensory} alt="Sensory" />
              </a>
              <div className="card--content">
                <h3 className="card--title t-18 margin-bottom-none">Sensory</h3>
                <p className="card--paragraph t-14">2019</p>
              </div>
            </div>
            <div className="card card-musicAlbums">
              <a className="card--image margin-bottom-small" href="https://open.spotify.com/album/0kYYL9dqUdgFrj56QtJ3dz?si=jiBq-FFVTda7bEB7HwJtjA">
                <img src={imgMusicTheScore} alt="The Score" />
              </a>
              <div className="card--content">
                <h3 className="card--title t-18 margin-bottom-none">The Score</h3>
                <p className="card--paragraph t-14">2017</p>
              </div>
            </div>
            <div className="card card-musicAlbums">
              <a className="card--image margin-bottom-small" href="https://madebyporter.bandcamp.com/album/higher">
                <img src={imgMusicHigher} alt="Higher" />
              </a>
              <div className="card--content">
                <h3 className="card--title t-18 margin-bottom-none">Higher</h3>
                <p className="card--paragraph t-14">2016</p>
              </div>
            </div>
            <div className="card card-musicAlbums">
              <a className="card--image margin-bottom-small" href="https://madebyporter.bandcamp.com/album/a-story-to-tell-freeway-nights">
                <img src={imgMusicFreewayNights} alt="Freeway Nights" />
              </a>
              <div className="card--content">
                <h3 className="card--title t-18 margin-bottom-none">Freeway Nights</h3>
                <p className="card--paragraph t-14">2014</p>
              </div>
            </div>
            <div className="card card-musicAlbums">
              <a className="card--image margin-bottom-small" href="https://madebyporter.bandcamp.com/album/coffee-reefer">
                <img src={imgMusicCoffeeAndReefer} alt="Coffee and Reefer" />
              </a>
              <div className="card--content">
                <h3 className="card--title t-18 margin-bottom-none">Coffee &amp; Reefer</h3>
                <p className="card--paragraph t-14">2010</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section className="block block-section">
      <SectionTitle text="Entrepreneur" />

      <BlockParagraphExt 
        blockTitle="Product Audit System"
        blockContent="Every quarter, I review all the projects I've worked on and add them to my product audit system. I add in the data and it spits out how cool the project is based on my tastes. You can download my Notion template for it here:" 
        blockLinkURL="https://madebyporter.notion.site/Use-my-Project-Audit-System-550288c2c81b4628a806a0081e8bd601"
        blockLinkTitle="Download the Product Audit System"
      /> 
    </section>

  </Layout>
)

export default IndexPage
