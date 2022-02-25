import React from 'react'
import "./Chips.css"
const Chips = (prop) => {
  return (
    <span className='chips' style={{background:prop.backgroundColor}}>
    {prop.text}
    </span>
  )
}

export default Chips