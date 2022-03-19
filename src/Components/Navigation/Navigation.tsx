import React from 'react'
import { Link } from 'gatsby'
import "./Navigation.css"
const Span = ()=>(<div><span></span><span></span><span></span><span></span></div>)
const Navigation = () => {
    return (
        <nav>
            <div className='css-typing' style={{float:"right" ,margin:'42px'}}>
            <Link className= {'btn'} to = "#"><Span/>{`//01. <خانه/>` }</Link>
            <Link className= {'btn'} to = "#portfolio"><Span/>{`//02. <نمونه کارها/>` }</Link>
            </div>
            <div className='css-typing' style={{float:"left"  ,margin:'42px' }}>
            <Link className= {'btn'} to = "#connectwithme"><Span/>{`//03. <تماس با من/>` }</Link>
            <Link className= {'btn'} to = "#aboutme"><Span/>{`//04. <درباره من/>` }</Link>
            </div>
            
        </nav>
       
       
    )
}

export default Navigation
