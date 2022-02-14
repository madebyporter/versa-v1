import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />

    <Hero heroText="Mmmh. 404." heroDesc="This page is not working right now or was never working in the first place."  />
  </Layout>
)

export default NotFoundPage
