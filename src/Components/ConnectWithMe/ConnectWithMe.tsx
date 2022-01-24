import React from 'react';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import './ConnectWithMe.css';
const ConnectWithMe = () => {
  return (
  <SectionWrapper>
    <div className="connect__holder">
      <h2><span>{`<h3>`}</span>ارتباط با من<span>{`</h3>`}</span></h2>
      <div className='social__media__holder'>
        <div className='social__media__item social__one'>
          <div>
            <a>Github</a>           
          </div>
        </div>
        <div className='social__media__item social__two'>
          <div>
            <a>Instagram</a>           
          </div>
        </div>
        <div className='social__media__item social__three'>
          <div>
            <a>Linkedin</a>           
          </div>
        </div>
        <div className='social__media__item social__four'>
          <div>
            <a>Discord</a>           
          </div>
        </div>
        <div className='social__media__item social__five'>
          <div>
            <a href='#'>Gmail</a>           
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
  )
};

export default ConnectWithMe;
