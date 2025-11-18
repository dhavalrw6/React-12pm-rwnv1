import React, { useEffect, useState } from 'react'
import Demo from './components/Demo';

const App = () => {

  const [count,setCount] = useState(0);
  const [showCom,setShowCom] = useState(false);


  const handleCount = ()=>{
    setCount(count + 1);
  }

  const handleShow = ()=>{
    setShowCom(true);
  }

  const handleHide=()=>{
    setShowCom(false);
  }

  const handleToggle = ()=>{
    if(showCom){
      setShowCom(false);
    }else{
      setShowCom(true);
    }
  }

  console.log("render....");

  return (
    <>
        <h2>Hello React Dev.</h2>
        <button onClick={handleCount}>Click me</button>
        <button onClick={handleShow}>Show</button>
        <button onClick={handleHide}>Hide</button>
        <button onClick={handleToggle}>Toggle</button>
        
        {showCom ? <Demo/> : null}
    </>
  )
}

export default App
