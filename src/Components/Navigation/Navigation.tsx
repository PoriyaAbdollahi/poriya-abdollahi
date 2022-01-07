import React from 'react'
import { Link } from 'gatsby'
import "./Navigation.css"

const Navigation = () => {
    return (
        <nav class = "topnav" >
            <div style={{float:"right" }}>
            <Link to = "/">{`//01. <خانه/>` }</Link>
            <Link to = "/">{`//02. <نمونه کارها/>` }</Link>
            </div>
            <div style={{float:"left"}}>
            <Link to = "/">{`//03. <تماس با من/>` }</Link>
            <Link to = "/">{`//04. <مطبوعات/>` }</Link>
            </div>
            
        </nav>
       
       
    )
}

export default Navigation
