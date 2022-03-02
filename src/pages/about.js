import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  
  <Layout>
    <Seo title="About Chris Porter" />

    <Hero heroText="Connecting the dots between disciplines" heroDesc="I'm a designer, developer &amp; music producer with a passion for creative problem solving."  />

    <section className="block block-section">
      <header className="block-header g-m-1-13 g-1-13">
        <h2 className="t-24 block-header-title g-m-1-13 g-l-4-13 g-4-13">About</h2>
      </header>
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Bio</h3>
        <p className="t-36">Before SSFN, I worked as a full-time freelancer designing web apps &amp; sites for Hyrecar, Gigmor, Silicon Beach Talent &amp; Ron Finley. Before that, I was working in-house, designing interfaces for companies like Paystr, HRCloud &amp; <a href="https://www.buzzhoney.com/" target="_blank" rel="noreferrer">Buzzhoney</a>.</p>
        <p className="t-36">To get that level, I graduated with a Bachelor of Science from The Art Institute for Interactive Media Design. To learn about my passions, I started learning design, HTML &amp; CSS at the age of 13.</p>
      </div>
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Values</h3>
        <ul className="list-bordered">
          <li className="t-36 values-copy text-right">
            Make <span className="values-copy-reg">Things Simple</span><span className="values-copy-hover">Simple Things</span>
          </li>
          <li className="t-36 values-copy">
            Make <span className="values-copy-reg">Things Useful</span><span className="values-copy-hover">Useful Things</span>
          </li>
          <li className="t-36 values-copy">
            Make <span className="values-copy-reg">Things Impactful</span><span className="values-copy-hover">Impactful Things</span>
          </li>
        </ul>
      </div>
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <header className="block-content-header grid">
          <h3 className="t-36 block-content-title g-m-1-13 g-t-1-6">Resume</h3>
          <nav className="nav nav-horz status-nav g-m-1-13 g-t-6-13">
            <div className="nav-item">
              <span className="status status-active-full" />
              <span className="status-label">Active</span>
            </div>
            <div className="nav-item">
              <span className="status status-active-partial" />
              <span className="status-label">In spirit</span>
            </div>
            <div className="nav-item">
              <span className="status status-dead" />
              <span className="status-label">Archived</span>
            </div>
          </nav>
        </header>
        <ul className="list-bordered resume-list">
        <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4 "><Link to="https://www.faithfulhomes.biz" target="_blank">Faithful Homes</Link></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Product Design <small>w/ <a href="https://www.ssfn.io" target="_blank" rel="noreferrer">SSFN</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2018–</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-full" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-5 g-1-4"><a href="/cases/organicsalive-2019" rel="noreferrer">Organics Alive</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Shopify Consultant <small>w/ <a href="https://www.ssfn.io" target="_blank" rel="noreferrer">SSFN</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2018–</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-full" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><a href="https://www.boomuniverse.co" target="_blank" rel="noreferrer">Boom Concepts</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Dev Consultant <small>w/ <a href="https://www.ssfn.io" target="_blank" rel="noreferrer">SSFN</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2018–</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-full" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><a href="/cases/ronfinley-2016">Ron Finley</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Shopify Consultant</li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2015–</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-full" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-5 g-1-4"><a href="https://experience.apple/iphone/" target="_blank" rel="noreferrer">Apple</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Web Development <small>w/ <a href="https://novvum.io/" target="_blank" rel="noreferrer">Novvum</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2021</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-partial" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-5 g-1-4"><a href="https://ivypark.rodeo/?q=xz8zepices" target="_blank" rel="noreferrer">Ivy Park</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Web Design <small>w/ <a href="https://novvum.io/" target="_blank" rel="noreferrer">Novvum</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2021</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-partial" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-5 g-1-4">Digmee</li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Product Design <small>w/ <a href="https://novvum.io/" target="_blank" rel="noreferrer">Novvum</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2021</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-partial" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-5 g-1-4"><a href="/cases/reactheadless-2021">ReactHeadless.com</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Web Design <small>w/ <a href="https://novvum.io/" target="_blank" rel="noreferrer">Novvum</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2021</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-partial" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-5 g-1-4"><a href="/cases/novvum-2021">Novvum</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Web Design <small>w/ <a href="https://novvum.io/" target="_blank" rel="noreferrer">Novvum</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2021</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-partial" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-5 g-1-4"><a href="https://www.lesliestefanson.com" target="_blank" rel="noreferrer">Leslie Stefanson</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Wordpress Dev <small>w/ <a href="https://www.spark6.com" target="_blank" rel="noreferrer">SPARK6</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2019–2020</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-partial" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><a href="https://www.zelmins.com" target="_blank" rel="noreferrer">Zelmins</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Shopify Consultant <small>w/ <a href="https://www.spark6.com" target="_blank" rel="noreferrer">SPARK6</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2019-2020</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-partial" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><a href="http://www.squrlfitness.com" target="_blank" rel="noreferrer">Squrl Fitness</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Web Design</li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2018-2019</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-partial" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><a href="https://www.hyrecar.com" target="_blank" rel="noreferrer">Hyrecar</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Product Design</li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2018-2019</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-partial" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><a href="https://www.lakinaturals.com" target="_blank" rel="noreferrer">Laki Natural</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Shopify Consultant <small>w/ <a href="https://www.spark6.com" target="_blank" rel="noreferrer">SPARK6</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2018</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-partial" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><a href="https://www.gigmor.com" target="_blank" rel="noreferrer">Gigmor</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Product Design</li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2017-2018</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-partial" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-5 g-1-4">I Fly You Buy</li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Product Design <small>w/ <a href="https://itsmejose.com/" target="_blank" rel="noreferrer">Jose Espinosa</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2017–2018</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-dead" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-5 g-1-4">Live Raise</li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Product Design</li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2017–2019</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-dead" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-5 g-1-5"><a href="https://www.myfdtps.com" target="_blank" rel="noreferrer">Foundation Transportation</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Web Design &amp; Consultant</li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2016-2019</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-partial" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-5 g-1-4"><a href="https://www.siliconbeachtalent.com" target="_blank" rel="noreferrer">Silicon Beach Talent</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Web Design <small> w/ <a href="https://aminaeily.com/" target="_blank" rel="noreferrer">Ami' Naeily</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2016-2017</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-active-partial" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Newscrack</li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">UI Design</li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2015-2017</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-dead" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Paystr</li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">In-house Product Design</li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2013-2014</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-dead" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><a href="https://www.hrcloud.com" target="_blank" rel="noreferrer">HRCloud</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">In-house Design Engineering</li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2012-2013</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-dead" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><a href="https://www.jayeneutron.com" target="_blank" rel="noreferrer">Jaye Neutron</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Web Design</li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2012-2013</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-dead" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Bonqo</li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">UI Design</li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2011-2012</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-dead" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Wawadoo</li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Product Design</li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2010</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-dead" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><a href="https://www.gianteagle.com" target="_blank" rel="noreferrer">Giant Eagle</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Web Design <small>w/ <a href="https://www.buzzhoney.com/" target="_blank" rel="noreferrer">Buzzhoney</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2009-2010</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-dead" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-5 g-1-5"><a href="https://www.dickssportinggoods.com" target="_blank" rel="noreferrer">Dick's Sporting Goods</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Product Design <small>w/ <a href="https://www.buzzhoney.com/" target="_blank" rel="noreferrer">Buzzhoney</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2009</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-dead" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><a href="https://www.upmc.com" target="_blank" rel="noreferrer">UPMC</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Web Design <small>w/ <a href="https://www.buzzhoney.com/" target="_blank" rel="noreferrer">Buzzhoney</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2008-2010</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-dead" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><a href="https://www.ge.com" target="_blank" rel="noreferrer">General Electric</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Web Design <small>w/ <a href="https://www.buzzhoney.com/" target="_blank" rel="noreferrer">Buzzhoney</a></small></li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2007-2008</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-dead" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><a href="https://www.buzzhoney.com/" target="_blank" rel="noreferrer">Buzzhoney</a></li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">In-house Designer</li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2007-2010</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-dead" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Fab 5 Entertainment</li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Web Designer</li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2007-2010</li>
              <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className="status status-dead" /></li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4">Art Institute</li>
              <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">Undergrad Student</li>
              <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">2005-2009</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default IndexPage
