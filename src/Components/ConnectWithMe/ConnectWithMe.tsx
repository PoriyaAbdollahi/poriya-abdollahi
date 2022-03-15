import React from 'react';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import './ConnectWithMe.css';
const ConnectWithMe = () => {
  return (
  <SectionWrapper>
    <div className="connect__holder">
      <h2 id='connectwithme'><span>{`<h3>`}</span>ارتباط با من<span>{`</h3>`}</span></h2>
      <div className='social__media__holder'>
        <a   href='https://github.com/PoriyaAbdollahi' className='social__media__item social__one'>
         <div>
           Github
         </div>
        </a>
        <a href='https://www.instagram.com/poriyarushan.dark/' className='social__media__item social__two'>
          <div>
           Instagram        
          </div>
        </a>
        <a href='https://www.linkedin.com/in/poriya-abdollahi-673942200/' className='social__media__item social__three'>
         <div>
           Linkedin
         </div>
        </a>
        <a href='https://discord.gg/fhTMmhHb' className='social__media__item social__four'>
          <div>
            Discord          
          </div>
        </a>
        <a href ='mailto:poriyaa58@gmail.com' className='social__media__item social__five'>
          <div>
           Gmail           
          </div>
        </a>
      </div>
    </div>
  </SectionWrapper>
  )
};

export default ConnectWithMe;
