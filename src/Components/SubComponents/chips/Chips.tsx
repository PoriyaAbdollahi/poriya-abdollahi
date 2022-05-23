import React from 'react'
import "./Chips.css"
const Chips = (prop) => {
  return (
    <p className='chips' style={{background:prop.backgroundColor}}>
    {prop.text}
    </p>
  )
}

export default Chips