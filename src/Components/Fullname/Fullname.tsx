import React from 'react'
import './Fullname.css'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
const Fullname = () => {
    return (
        <SectionWrapper>
            <div className="who-i-am">
                <p>{`<p>`}<span>من</span>{`</p>`}</p>
                <span>{"<h1>"}</span>
                <h1>{`پوریا عبدالهی`}</h1>
                <span>{"</h1>"}</span>
                <p>{`<p>`}<span>هستم</span>{`</p>`}</p>
                <p className='fullname__describe'>{`<p>`}<span>برنامه نویس اندروید و فرانت اند</span>{`</p>`}</p>
             </div>
        </SectionWrapper>
    )
}

export default Fullname
