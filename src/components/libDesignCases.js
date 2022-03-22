import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'

export default function LibDesignCases() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}){
        nodes {
          id
          slug
          frontmatter {
            type
            title
            tag
            hero_image_alt
            hero_image
            desc
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `)
  return (
    <div className="card-carousel card-carousel-cases grid g-m-1-13 g-l-1-13 g-1-13">
      <div className="card-carousel--track g-m-1-13 g-l-4-13 g-4-13">
        {
          data.allMdx.nodes.map((node) => (
            <div className="card card-case" key={node.id}>
              <div className="card--image"></div>
              <div className="card--tagset">
                <span className="card--tag">{node.frontmatter.type}</span>
                <span className="card--tag">{node.frontmatter.tag}</span>
              </div>
              <div className="card--content">
                <h3 className="card--title t-24">{node.frontmatter.title}</h3>
                <p className="card--paragraph t-18">{node.frontmatter.desc}</p>
                <Link className="t-18" to={`/library/${node.slug}`}>View Case Study &raquo;</Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}