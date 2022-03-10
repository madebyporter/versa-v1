import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import BlockParagraph from "../components/blockParagraph"
import BlockImage from "../components/blockImage"
import SectionTitle from "../components/sectionTitle"
import List from '../components/list'
import ListItem from '../components/listItem'

import imgPortfolio from "../images/projects-bbx.jpg"
import imgProjectAuditApp from "../images/mbp-projectauditsystem-gumroad--app.png"
import imgProjectAuditBG from "../images/mbp-projectauditsystem-gumroad--bg.jpg"


const IndexPage = () => (
  
  <Layout>
    <Seo title="Minimalist designer &amp; problem solver" />

    <Hero heroText="Helping people design systems with minimalism &amp; data." heroDesc="I am Chris Porter, a seasoned designer, developer &amp; audio producer for entrepreneurs. I enjoy building systems for small businesses &amp; early stage startups."  />

    <section className="block block-section">
      <SectionTitle text="Projects I'm working on right now" />

      <BlockParagraph 
        blockTitle="Creative Freelance Consulting"
        blockContent="I help teach new freelancers &amp; solopreneurs coming from in-house teams about the aspects of freelancing. You’ll learn how to find clients, negotiate contracts, manage projects &amp; handle your business." 
        blockLinkURL="https://calendly.com/madebyporter/consulting"
        blockLinkTitle="Book a Session"
      />

      <BlockImage
        blockImageSrc={imgPortfolio}
        blockImageAlt="The Beatbox Club"
        blockImageCaption="The Beatbox Club"
      />

      <BlockParagraph 
        blockTitle="The Beatbox Club"
        blockContent="As a music producer, I wanted to build a simple way to showcase my production library. Most solutions offered too much, so I build my own solution. Now I want to help other music producers organize their production library." 
        blockLinkURL="https://www.thebeatboxclub.com/producers/madebyporter"
        blockLinkTitle="View my library"
      />

      <BlockImage
        blockImageSrc={imgProjectAuditApp}
        blockImageAlt="The Project Audit System, a Notion template."
        blockImageCaption="Background Photo by"
        blockImageLink="https://unsplash.com/photos/MpTdvXlAsVE"
        blockImageLinkText="Martin Adams"
        blockImageBG={imgProjectAuditBG}
      />

      <BlockParagraph 
        blockTitle="Product Audit System"
        blockContent="Every quarter, I review all the projects I've worked on and add them to my product audit system. I add in the data and it spits out how cool the project is based on my tastes. You can download my Notion template for it here:" 
        blockLinkURL="https://madebyporter.notion.site/Use-my-Project-Audit-System-550288c2c81b4628a806a0081e8bd601"
        blockLinkTitle="Download the Product Audit System"
      />

      <List listTitle="Current Clients" statusGreenTitle="Active" statusYellowTitle="In Spirit" statusRedTitle="Archived">
        <ListItem 
          title="Faithful Homes" 
          titleLink="https://www.faithfulhomes.biz" 
          desc="Product Design" 
          year="2018–" 
          status="green" 
        />
        <ListItem 
          title="Organics Alive" 
          titleLink="/cases/organicsalive-2019" 
          desc="Shopify Development" 
          year="2018–" 
          status="green" 
        />
        <ListItem 
          title="Boom Concepts" 
          titleLink="https://www.boomuniverse.co" 
          desc="Design amp; Development" 
          year="2018-" 
          status="green" 
        />
        <ListItem 
          title="Ron Finley" 
          titleLink="/cases/ronfinley-2016" 
          desc="Design &amp; Development" 
          year="2015-" 
          status="green" 
        />
      </List>
    </section>
  </Layout>
)

export default IndexPage
