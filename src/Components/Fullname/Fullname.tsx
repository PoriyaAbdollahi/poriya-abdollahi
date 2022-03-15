import React from 'react'
import './Fullname.scss'
import SectionWrapper from '../SectionWrapper/SectionWrapper'

const Fullname = () => {
    return (
        <SectionWrapper>
            <div className='flex-container flex-item-left'>
            <div className="who-i-am">
                <p>{`<p>`}<span>من</span>{`</p>`}</p>
                <span>{"<h1>"}</span>
                
                <h1 data-text="پوریا عبدالهی">
                {`پوریا عبدالهی`}
                </h1>

                <span>{"</h1>"}</span>
                <p>{`<p>`}<span>هستم</span>{`</p>`}</p>
                <p className='fullname__describe'>{`<p>`}<span>برنامه نویس اندروید و فرانت اند</span>{`</p>`}</p>
             </div>
             <div className='curriculumvitae flex-item-right'>   
             <div className='circleholder' id='resumebtn'>
                <div className="outerCircle"></div>
                <div className="innerCircle"></div>
                <div className="icon"> دانلود رزومه </div>
            </div>              
             </div>
             </div>
        </SectionWrapper>
    )
}

export default Fullname
