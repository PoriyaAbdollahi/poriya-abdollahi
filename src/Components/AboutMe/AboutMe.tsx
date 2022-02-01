import React from 'react';
import './AboutMe.css'
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const AboutMe = () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Images/thisisme.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (<SectionWrapper>
       <h2 className='about__me__title'><span>{`<h2>`}</span>درباره من<span>{`</h2>`}</span></h2>
      <div className='about__me'>
      <Img className={'about__me__image'} fluid={data.file.childImageSharp.fluid} alt="عکس پوریا عبدالهی"/>
      <p> yek do yek do yek do yek do yek do yek do yek do yek do yek do yek do yek do yek do yek do yek do yek do yek do yek do yek do yek do yek do do yek do yek do yek do do yek do yek do yek do do yek do yek do yek do </p>
      </div>
  </SectionWrapper>);
};

export default AboutMe;
