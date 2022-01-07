import React from "react"
import { Helmet } from "react-helmet"
import Navigation from "../Components/Navigation/Navigation"
import staticData from "../static/staticData"
import './index.css'
const IndexPage = () => (
  <div class={"index"}>
    <Helmet htmlAttributes={staticData.siteLanguage}>
          <meta name="description" content={staticData.SiteDescription} />
          <title>{staticData.fullname}</title>
    </Helmet>
    <Navigation/>
   <p>poriya Abdollahi</p>
  </div>
)

export default IndexPage
