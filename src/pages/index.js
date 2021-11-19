import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

import imgPortfolio from "../images/projects-bbx.jpg"


const IndexPage = () => (
  <Layout>
    <Hero heroText="Hyper-minimalist designer, developer, music producer &amp; entrepreneur." />

    <section className="block block-section">
      <header className="block-header g-m-1-13 g-1-13">
        <h2 className="t-24 block-header-title g-m-1-13 g-l-3-13 g-4-13">Now</h2>
      </header>
      <div className="block-content g-m-1-13 g-l-3-12 g-4-12">
        <h3 className="t-36 block-content-title">SSFN</h3>
        <p className="t-36">Co-founded a venture agency with <a href="https://www.stephenlamiller.com">Stephen Miller</a> that designs systems for start-ups, small businesses &amp; solopreneurs. Currently, we’re focused on building a digital system for a transportation &amp; housing company. <a href="https://www.ssfn.io">Visit the site</a>.</p>
      </div>
      <div className="block-content g-m-1-13 g-l-3-12 g-4-12">
        <h3 className="t-36 block-content-title">Creative Freelance Consulting</h3>
        <p className="t-36">I help teach new freelancers &amp; solopreneurs coming from in-house teams about the aspects outside of their design or developer skills. You’ll learn how to find clients, negotiate contracts, manage projects &amp; handle your business. <a href="https://calendly.com/madebyporter/consulting">Book a Session</a>.</p>
      </div>

      <div className="block-portfolio block-portfolio-desktop g-m-1-13">
        <img className="block-portfolio-img" src={imgPortfolio} alt="Portfolio" />  
      </div>

      <div className="block-content g-m-1-13 g-l-3-12 g-4-12">
        <h3 className="t-36 block-content-title">The Beatbox Club</h3>
        <p className="t-36">As a music producer, I wanted to build a simple way to showcase my production library. Most solutions offered too much, so I build my own solution. Now I want to help other music producers organize their production library. <a href="https://www.thebeatboxclub.com/producers/madebyporter">View my library</a>.</p>
      </div>
    </section>

    <section className="block block-section">
      <header className="block-header g-m-1-13 g-1-13">
        <h2 className="t-24 block-header-title g-m-1-13 g-l-3-13 g-4-13">About</h2>
      </header>
      <div className="block-content g-m-1-13 g-l-3-12 g-4-12">
        <h3 className="t-36 block-content-title">Bio</h3>
        <p className="t-36">Before SSFN, I worked as a full-time freelancer designing web apps &amp; sites for Hyrecar, Gigmor, Silicon Beach Talent &amp; Ron Finley. Before that, I was working in-house, designing interfaces for startups like Paystr, HRCloud &amp; Buzzhoney.</p>
        <p className="t-36">To get that level, I graduated with a Bachelor of Science from The Art Institute for Interactive Media Design. To learn about my passions, I started learning design, HTML &amp; CSS at the age of 13.</p>
      </div>
      <div className="block-content g-m-1-13 g-l-3-12 g-4-12">
        <h3 className="t-36 block-content-title">Values</h3>
        <ul className="list-bordered">
          <li className="t-36">Make Things Simple</li>
          <li className="t-36">Make Things Useful</li>
          <li className="t-36">Make Things Impactful</li>
        </ul>
      </div>
      <div className="block-content g-m-1-13 g-l-3-12 g-4-12">
        <h3 className="t-36 block-content-title">Resume</h3>
        <ul className="list-bordered">
          <li>
            <ul className="list-item-columns g-align-end">
              <li className="t-24 g-m-1-13 g-l-1-4 g-1-4">SSFN</li>
              <li className="t-18 g-m-1-8 g-t-1-6 g-l-5-9 g-5-9">Co-Founder</li>
              <li className="t-18 g-m-8-13 g-t-6-13 g-l-10-13 g-10-13">2017–</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-end">
              <li className="t-24 g-m-1-13 g-l-1-4 g-1-4">Spark6</li>
              <li className="t-18 g-m-1-8 g-t-1-6 g-l-5-9 g-5-9">Freelancer Web Designer</li>
              <li className="t-18 g-m-8-13 g-t-6-13 g-l-10-13 g-10-13">2019–</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-end">
              <li className="t-24 g-m-1-13 g-l-1-4 g-1-4">Made by Porter</li>
              <li className="t-18 g-m-1-8 g-t-1-6 g-l-5-9 g-5-9">Freelance Solopreneur</li>
              <li className="t-18 g-m-8-13 g-t-6-13 g-l-10-13 g-10-13">2004–</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-end">
              <li className="t-24 g-m-1-13 g-l-1-4 g-1-4">Hyrecar</li>
              <li className="t-18 g-m-1-8 g-t-1-6 g-l-5-9 g-5-9">Freelance Product Designer</li>
              <li className="t-18 g-m-8-13 g-t-6-13 g-l-10-13 g-10-13">2018-2019</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-end">
              <li className="t-24 g-m-1-13 g-l-1-4 g-1-4">Gigmor</li>
              <li className="t-18 g-m-1-8 g-t-1-6 g-l-5-9 g-5-9">Freelance Product Designer</li>
              <li className="t-18 g-m-8-13 g-t-6-13 g-l-10-13 g-10-13">2017-2018</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-end">
              <li className="t-24 g-m-1-13 g-l-1-4 g-1-4">Hyrecar</li>
              <li className="t-18 g-m-1-8 g-t-1-6 g-l-5-9 g-5-9">Freelance Product Designer</li>
              <li className="t-18 g-m-8-13 g-t-6-13 g-l-10-13 g-10-13">2018-2019</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-end">
              <li className="t-24 g-m-1-13 g-l-1-4 g-1-4">Newscrack</li>
              <li className="t-18 g-m-1-8 g-t-1-6 g-l-5-9 g-5-9">Freelance UI Designer</li>
              <li className="t-18 g-m-8-13 g-t-6-13 g-l-10-13 g-10-13">2016-2018</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-end">
              <li className="t-24 g-m-1-13 g-l-1-4 g-1-4">Paystr</li>
              <li className="t-18 g-m-1-8 g-t-1-6 g-l-5-9 g-5-9">Senior UX Architect</li>
              <li className="t-18 g-m-8-13 g-t-6-13 g-l-10-13 g-10-13">2013-2014</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-end">
              <li className="t-24 g-m-1-13 g-l-1-4 g-1-4">NEOGOV</li>
              <li className="t-18 g-m-1-8 g-t-1-6 g-l-5-9 g-5-9">UI Engineer</li>
              <li className="t-18 g-m-8-13 g-t-6-13 g-l-10-13 g-10-13">2012-2013</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-end">
              <li className="t-24 g-m-1-13 g-l-1-4 g-1-4">Buzzhoney</li>
              <li className="t-18 g-m-1-8 g-t-1-6 g-l-5-9 g-5-9">Visual Designer</li>
              <li className="t-18 g-m-8-13 g-t-6-13 g-l-10-13 g-10-13">2007-2011</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-end">
              <li className="t-24 g-m-1-13 g-l-1-4 g-1-4">Art Institute</li>
              <li className="t-18 g-m-1-8 g-t-1-6 g-l-5-9 g-5-9">Undergrad Student</li>
              <li className="t-18 g-m-8-13 g-t-6-13 g-l-10-13 g-10-13">2005-2009</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default IndexPage
