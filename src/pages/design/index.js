import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import BlockParagraph from "../../components/blockParagraph"
import SectionTitle from "../../components/sectionTitle"
import ContentResumeDesign from "../../components/contentResumeDesign"

const IndexPage = () => (
  
  <Layout>
    <Seo title="Design Engineer creating systems for creative founders." />

    <Hero heroText="Design Engineer creating systems for creative founders."  />

    <section className="block block-section">
      <SectionTitle text="Design Services" />

      <div className="grid block-content g-m-1-13 g-l-4-12 g-4-12">
        <div className="g-m-1-13 g-l-1-6 g-1-6">
          Systems Design
        </div>
        <div className="g-m-1-13 g-l-7-12 g-7-12">
          Design Systems
        </div>
      </div>
    </section>

    <section className="block block-section">
      <SectionTitle text="Systems Design" />

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Abstract</h3>
        <p className="t-36">
          You’re a founder looking to scale up your proven business model from minimal viable product to next level. You want to spend more time on the business than the website or app. 
        </p>
        <p className="t-24">
          Your goal is to find an expert who can scale up your digital system, improve design usability and improve your results. I help founders by auditing your current system, creating a plan and improving the system. 
        </p>
        <p className="t-24">
          <strong>Location:</strong> Remote; Slack for Communication.<br />
          <strong>Scheduling:</strong> 4-12 weeks, plus one month of support.<br />
          <strong>Deliverable:</strong> Discovery playbook, new website or app &amp; one month of support.<br />
          <strong>Qualification:</strong> Most effective for companies already making between $100,000 &amp; $500,000 before profit, with a company size of 1-10 &amp; majority of your sales are generated online.<br />
          <strong>Price:</strong> $10,000+, depending on size of project.
        </p>
      </div>

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Case Studies</h3>
        <p className="t-24">
          cases
        </p>
      </div>

      <ContentResumeDesign />

      <BlockParagraph 
        blockTitle="How to Get Started?"
        blockContent="Ready to improve your digital system? First contact me by booking time to speak with me. We’ll discuss your plans and figure out whether or not this is a good fit for you." 
        blockLinkURL="https://calendly.com/madebyporter/project"
        blockLinkTitle="Book a Project Chat"
      />
    </section>

    <section className="block block-section">
      <SectionTitle text="Design Systems" />

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Abstract</h3>
        <p className="t-36">
          You’re a founder looking to turn your minimal viable process into a minimal viable product. 
        </p>
        <p className="t-24">
          Your goal is to get your website up quickly or your app design quickly so you can prove if it works in the your market. What you’re looking for is templates you can easily manipulate so you can spend less time building and more time proving. 
        </p>
      </div>

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Templates</h3>
        <p className="t-24">
          templates
        </p>
      </div>
    </section>

    <section className="block block-section">
      <SectionTitle text="Library" />

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Abstract</h3>
        <p className="t-36">
          Below is a gathering of links I save in my Raindrop account that’s design related. Blog posts will come soon. 
        </p>
      </div>

      <div className="block-content g-m-1-13 g-l-4-12 g-4-12">
        <h3 className="t-36 block-content-title">Posts</h3>
        <p className="t-24">
          library posts
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
