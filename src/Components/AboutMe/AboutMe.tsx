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
       <h2 id="aboutme" className='about__me__title'><span>{`<h2>`}</span>درباره من<span>{`</h2>`}</span></h2>
      <div className='about__me'>
      <Img className={'about__me__image'} fluid={data.file.childImageSharp.fluid} alt="عکس پوریا عبدالهی"/>
      <p><span>{`<p>`}</span>من برنامه نویس و توسعه دهنده هستم همینطور دانشجوی مهندسی نرم افزار 
 ۳ سال اخیر زندگیمو صرف مطالعه و روی نرم افزار ها و یادگیری زبان های مختلف
برنامه نویسی کردم
حوزه هایی که بیشتر در اون تمرکز داشتم  برنامه نویسی اندروید و  فراند اند 
و همینطور کامپایلر ها بوده  
۲۲ سالمه و از ۱۲ سالگی کار کردن با کامپیوتر رو یاد گرفتم 
<span>{`</p>`}</span></p>
      </div>
  </SectionWrapper>);
};

export default AboutMe;
