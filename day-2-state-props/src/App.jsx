import { useState } from "react";
import Display from "./components/Display.jsx";

const App = function () {
  const [count,setCount] = useState(0);

  const handleCount=()=>{
    setCount(count + 1);
  }

 
  return (
  <>
    <Display count={count} />
    <button onClick={handleCount}>Increment</button>
  </>
  )
}

export default App;