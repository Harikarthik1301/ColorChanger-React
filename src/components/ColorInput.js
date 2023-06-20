import React from 'react'

const ColorInput = ({color,setcolor}) => {
  return (
    <form className='InputForm'>
        <input type="text" 
        placeholder='Enter Color'
        value={color}
        onChange={(e)=> setcolor(e.target.value)}/>
    </form>
  )
}

export default ColorInput