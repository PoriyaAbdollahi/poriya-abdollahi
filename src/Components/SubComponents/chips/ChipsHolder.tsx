import React from 'react'
import "./ChipsHolder.css"
const ChipsHolder = (props) => {
  return (
    <div className='ChipsHolder'>{props.children}</div>
  )
}

export default ChipsHolder