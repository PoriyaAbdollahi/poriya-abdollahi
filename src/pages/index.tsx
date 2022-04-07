import React from "react"
import { Helmet } from "react-helmet"
import AboutMe from "../Components/AboutMe/AboutMe"
import ConnectWithMe from "../Components/ConnectWithMe/ConnectWithMe"
import Fullname from "../Components/Fullname/Fullname"
import Navigation from "../Components/Navigation/Navigation"
import Portfolio from "../Components/Portfolio/Portfolio"
import Skills from "../Components/Skills/Skills"
import staticData from "../../static/staticData"
import './index.css'
const IndexPage = () => (
  <div className="index">
    <Helmet htmlAttributes={staticData.siteLanguage}>
          <meta name="description" content={staticData.SiteDescription} />
          <meta name="google-site-verification" content="Fy3Dj0vdvV8ICooKmDsgcwUSD3s8V1bS4Y6boGoFaoA" />
          <title>{staticData.fullname}</title>
    </Helmet>
    <Navigation/>
    <Fullname/>
    <AboutMe/>
    <Portfolio/>
    <Skills/>
    <ConnectWithMe/>

    </div>

)

export default IndexPage
