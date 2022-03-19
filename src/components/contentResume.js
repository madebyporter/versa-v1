import * as React from 'react'
import { Link } from "gatsby"
import List from './list'
import dataResume from "../../content/resume.json"

const dataResumeJSON = () => (
  <List listTitle={dataResume.title} statusGreenTitle="Active" statusYellowTitle="In Spirit" statusRedTitle="Archived">
    {dataResume.content.map((data) => (
      <li>
        <ul className="list-item-columns g-align-items-end">
          <li className="t-24 g-m-1-13 g-t-1-5 g-l-1-4 g-1-4 ">
            {data.link ? <Link to={data.link}>{data.project}</Link> : <span>{data.project}</span>}
          </li>
          <li className="t-18 g-m-1-8 g-t-5-10 g-l-5-9 g-5-9">{data.role}</li>
          <li className="t-18 g-m-8-12 g-t-10-12 g-l-10-12 g-10-12">{data.year}</li>
          <li className="t-18 g-m-12-13 g-t-12-13 g-l-12-13 g-12-13 g-align-items-center"><span className={`status status-${data.status}`} /></li>
        </ul>
      </li>
    ))}
  </List>
)
export default dataResumeJSON