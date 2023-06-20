import React from 'react'

const ColorContainer = ({color}) => {
  return (
    <div className='colorContain' style={{background:color}}><p className='colorName'>{color}</p></div>
  )
}

export default ColorContainer