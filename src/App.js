import React, { useState } from 'react';
import './App.css';
import ColorContainer from './components/ColorContainer';
import ColorInput from './components/ColorInput';


function App() {
  const [colorval,setcolorval]=useState('')
  const[hexvalue,sethexvalue]=useState('')
  const[toggle,settoggle]=useState(true)

  return (
    <>
   <ColorContainer
   colorval={colorval}
   hexvalue={hexvalue}
   toggle={toggle}
   />
   <ColorInput
    colorval={colorval}
    setcolorval={setcolorval}
    hexvalue={hexvalue}
    sethexvalue={sethexvalue}
    toggle={toggle}
    settoggle={settoggle}/>
   </>
  );
}

export default App;
