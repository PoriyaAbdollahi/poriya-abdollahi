import React from 'react';
import './AboutMe.css'
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import { StaticImage } from 'gatsby-plugin-image';
const AboutMe = () => {

  return (
  <SectionWrapper>
      <h2 id="aboutme" className='about__me__title'><span>{`<h2>`}</span>درباره من<span>{`</h2>`}</span></h2>
      <div className='about__me'>
      <StaticImage className={'about__me__image'} src={"../../../static/thisisme.png"} alt="عکس پوریا عبدالهی"/>
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
