import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  
  <Layout>
    <Seo title="Minimalist designer &amp; problem solver" />

    <Hero heroText="My Design, Code, Music &amp; Biz Stack" heroDesc="Tools &amp; frameworks I use to get things done."  />

    <section className="block block-section">
      <header className="block-header g-m-1-13 g-1-13">
        <h2 className="t-24 block-header-title g-m-1-13 g-l-4-13 g-4-13">Design</h2>
      </header>
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">

        <ul className="list-bordered resume-list">
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.figma.com" target="_blank">Adobe Lightroom</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Photo editing.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Photography</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.figma.com" target="_blank">Affinity Designer</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Vector based design.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Graphic Design</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.figma.com" target="_blank">Affinity Photo</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Raster based design.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Graphic Design</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.blackmagicdesign.com/products/davinciresolve" target="_blank">DaVinci Resolve</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Video editing.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Cinematography</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.figma.com" target="_blank">Figma</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Collaborative product design.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Product Design</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.sketch.com" target="_blank">Sketch</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Offline product design.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Product Design</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://spline.design/" target="_blank">Spline</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">3D Design for web.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">3D Design</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.unsplash.com" target="_blank">Unsplash</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Stock Photos.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Photography</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.webflow.com" target="_blank">Webflow</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">No-Code Web Design</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Web Design</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
    <section className="block block-section">
      <header className="block-header g-m-1-13 g-1-13">
        <h2 className="t-24 block-header-title g-m-1-13 g-l-4-13 g-4-13">Software Engineering</h2>
      </header>
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">

        <ul className="list-bordered resume-list">
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://en.wikipedia.org/wiki/CSS" target="_blank">CSS</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Style Sheet language for styling.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Language</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://gatsbyjs.com/" target="_blank">GatsbyJS</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">React for websites.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Framework</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://en.wikipedia.org/wiki/Git" target="_blank">Git</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Managing site and app changes.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Version Control</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://github.com/" target="_blank">Github</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Git repository.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Tool</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Markup language for structure.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Language</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://hyper.is/" target="_blank">Hyper</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Electron based terminal.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Tool</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://en.wikipedia.org/wiki/Javascript" target="_blank">Javascript</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Programming for functionality.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Language</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.middlemanapp.com" target="_blank">Middleman</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">OG Jamstack Framework.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Framework</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://en.wikipedia.org/wiki/Ruby_(programming_language)" target="_blank">MySQL</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Relational DB for Wordpress</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Database</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.netlify.com" target="_blank">Netlify</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Jamstack hosting.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Hosting</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://en.wikipedia.org/wiki/Node.js" target="_blank">Node.JS</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">JavaScript runtime environment.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Environment</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://en.wikipedia.org/wiki/PHP" target="_blank">PHP</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Scripting language for Wordpress.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Language</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://en.wikipedia.org/wiki/Ruby_(programming_language)" target="_blank">Ruby</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Programming for Middeman</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Language</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank">SCSS</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Preprocessor Scripting</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Language</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://code.visualstudio.com/" target="_blank">VS Code</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Code websites &amp; apps.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Tool</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.wordpress.org/" target="_blank">Wordpress</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Content-Focused PHP CMS</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Framework</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
    <section className="block block-section">
      <header className="block-header g-m-1-13 g-1-13">
        <h2 className="t-24 block-header-title g-m-1-13 g-l-4-13 g-4-13">Music Production</h2>
      </header>
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">

        <ul className="list-bordered resume-list">
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.ableton.com" target="_blank">Ableton Live</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Compose music.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">DAW</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.arturia.com/products/analog-classics/pigments/overview" target="_blank">Arturia Pigments</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Synth wave table.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Plugin</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.arturia.com/products/analog-classics/v-collection/overview" target="_blank">Arturia V Collection</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Synth emulators.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Plugin</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.astonmics.com/EN/product/mics/origin" target="_blank">Aston Origin</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Condenser microphone.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Hardware</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://futureaudioworkshop.com/" target="_blank">FAW Sublab</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Sub bass synth.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Plugin</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.apple.com/logic-pro/" target="_blank">Logic Pro</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Engineer music.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">DAW</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.handclaps.app/" target="_blank">Handclaps</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Rap beat video generator.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Video</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.izotope.com/en/products/ozone.html" target="_blank">Izotope Ozone 9</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Mixing &amp; mastering tools.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Plugin</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://output.com/products/arcade" target="_blank">Output Arcade</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Sampler Subscription</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Plugin</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://focusrite.com/en/audio-interface/scarlett/scarlett-solo/" target="_blank">Scarlett Solo</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">USB audio interface.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Hardware</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.spitfireaudio.com/" target="_blank">Spitfire Audio</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Film composer instruments.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Plugin</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
    <section className="block block-section">
      <header className="block-header g-m-1-13 g-1-13">
        <h2 className="t-24 block-header-title g-m-1-13 g-l-4-13 g-4-13">Business</h2>
      </header>
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">

        <ul className="list-bordered resume-list">
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.calendly.com" target="_blank">Calendly</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Scheduling meetings.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Communication</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.notion.so" target="_blank">Google Workspace</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">For Gmail &amp; G-Docs.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Productivity</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.mercury.com" target="_blank">Mercury</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Startup neo-banking.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Finances</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.notion.so" target="_blank">Notion</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Product &amp; business management.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Productivity</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.banknovo.com/" target="_blank">Novo</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Solopreneur neo-banking.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Finances</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.slack.com/" target="_blank">Slack</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Project communication</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Communication</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://sparkmailapp.com/" target="_blank">Spark</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Manage multiple email accounts.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Communication</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.waveapps.com/" target="_blank">Wave</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Accounting software.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Finances</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.zapier.com/" target="_blank">Zapier</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Automation</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Productivity</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
    <section className="block block-section">
      <header className="block-header g-m-1-13 g-1-13">
        <h2 className="t-24 block-header-title g-m-1-13 g-l-4-13 g-4-13">Digital Nomading</h2>
      </header>
      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">

        <ul className="list-bordered resume-list">
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.airbnb.com/" target="_blank">Airbnb</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Booking places to stay.</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Tools</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.amazon.com/Fujifilm-Compact-System-Digital-2-8-Inch/dp/B0092MD5UY" target="_blank">Fujifilm X-E1</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Mirrorless Camera</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Gear</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.amazon.com/dp/B016S28E4W/ref=dp_iou_view_item?ie=UTF8&psc=1" target="_blank">Fujinon XF35mm F2</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Fixed Lens</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Gear</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://incase.com/products/dslr-pro-pack" target="_blank">Incase DSLR Bag</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">Backpack</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Gear</li>
            </ul>
          </li>
          <li>
            <ul className="list-item-columns g-align-items-end">
              <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4"><Link to="https://www.nomadlist.com" target="_blank">NomadList</Link></li>
              <li className="t-18 g-m-1-13 g-t-5-10 g-l-5-9 g-5-9">City Research</li>
              <li className="t-18 g-m-1-13 g-t-10-12 g-l-10-12 g-10-12">Tools</li>
            </ul>
          </li>        
        </ul>
      </div>
    </section>
  </Layout>
)

export default IndexPage
