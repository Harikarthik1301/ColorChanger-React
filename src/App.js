import React, { useState } from 'react';
import './App.css';
import ColorContainer from './components/ColorContainer';
import ColorInput from './components/ColorInput';


function App() {
  const [color,setcolor]=useState('')
  
  return (
    <>
   <ColorContainer
   color={color}
   />
   <ColorInput
    color={color}
    setcolor={setcolor}/>
   </>
  );
}

export default App;
