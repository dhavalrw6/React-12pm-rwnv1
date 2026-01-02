import { useState } from 'react'
import './App.css'
import Children from './components/Children'

function App() {
  const [count,setCount] = useState(0);

  console.log("Parent Component render....");
  

  return (
    <>
      <h2>Parent Component count: {count}</h2>
      <button type='button' onClick={()=> setCount(count + 1)}>Click</button>
      <Children/>
    </>
  )
}

export default App
