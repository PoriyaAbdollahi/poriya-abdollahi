import React from "react"
import { Helmet } from "react-helmet"
import staticData from "../static/staticData"
const IndexPage = () => (
  <div>
    <Helmet htmlAttributes={staticData.siteLanguage}>
          <meta name="description" content={staticData.SiteDescription} />
          <title>{staticData.fullname}</title>
        </Helmet>
        
   <p>poriya Abdollahi</p>
  </div>
)

export default IndexPage
