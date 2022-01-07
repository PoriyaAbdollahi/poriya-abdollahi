import React from 'react'
import { Link } from 'gatsby'
import "./Navigation.css"
const Span = ()=>(<div><span></span><span></span><span></span><span></span></div>)
const Navigation = () => {
    return (
        <nav  >
            <div style={{float:"right" ,margin:'42px'}}>
            <Link className= {'btn'} to = "/"><Span/>{`//01. <خانه/>` }</Link>
            <Link className= {'btn'} to = "/"><Span/>{`//02. <نمونه کارها/>` }</Link>
            </div>
            <div style={{float:"left"  ,margin:'42px' }}>
            <Link className= {'btn'} to = "/"><Span/>{`//03. <تماس با من/>` }</Link>
            <Link className= {'btn'} to = "/"><Span/>{`//04. <مطبوعات/>` }</Link>
            </div>
            
        </nav>
       
       
    )
}

export default Navigation
