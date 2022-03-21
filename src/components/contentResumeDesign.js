import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import List from './list'

export default function DataResumeJSON() {
  const data = useStaticQuery(graphql`
    query {
      allResumeJson(sort: { fields: [year], order: DESC }) {
        nodes {
          id
          year
          status
          role
          project
          link
        }
      }
    }
  `)
  return (
    <List listTitle="Resume" statusGreenTitle="Active" statusYellowTitle="In Spirit" statusRedTitle="Archived">
      {data.allResumeJson.nodes.map(data => (
        <li key={data.id}>
          <ul className="list-item-columns g-align-items-end">
            <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-5 g-1-5 nowrap">
              {data.link ? <Link to={data.link}>{data.project}</Link> : <span>{data.project}</span>}
            </li>
            <li className="t-18 g-m-1-8 g-t-5-10 g-l-6-10 g-6-10">{data.role}</li>
            <li className="t-18 g-m-8-12 g-t-11-12 g-l-11-12 g-11-12">{data.year}</li>
            <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className={`status status-${data.status}`} /></li>
          </ul>
        </li>
      ))}
    </List>
  )
}