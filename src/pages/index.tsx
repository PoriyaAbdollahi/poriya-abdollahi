import React from "react"
import { Helmet } from "react-helmet"
import Fullname from "../Components/Fullname/Fullname"
import Navigation from "../Components/Navigation/Navigation"
import staticData from "../static/staticData"
import './index.css'
const IndexPage = () => (
  <div className="index">
    <Helmet htmlAttributes={staticData.siteLanguage}>
          <meta name="description" content={staticData.SiteDescription} />
          <title>{staticData.fullname}</title>
    </Helmet>
    <Navigation/>
    <Fullname/>
    </div>

)

export default IndexPage
