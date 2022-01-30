import React from "react"
import { Helmet } from "react-helmet"
import ConnectWithMe from "../Components/ConnectWithMe/ConnectWithMe"
import Fullname from "../Components/Fullname/Fullname"
import Navigation from "../Components/Navigation/Navigation"
import Portfolio from "../Components/Portfolio/Portfolio"
import Skills from "../Components/Skills/Skills"
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
    <Portfolio/>
    <Skills/>
    <ConnectWithMe/>

    </div>

)

export default IndexPage
