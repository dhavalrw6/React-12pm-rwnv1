import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [count,setcount] = useState(0);
  const sum = useMemo(() => {
    console.log("sum function calling...");    
    return num1 + num2;
  },[num1,num2]);
  
  return (
    <>
      <input
        type="number"
        onChange={(e) => setnum1(Number(e.target.value))}
        value={num1}
        name=""
        id=""
      />
      <input
        type="number"
        onChange={(e) => setnum2(Number(e.target.value))}
        value={num2}
        name=""
        id=""
      />

      <h2>sum is: {sum}</h2>

      <h2>Count : {count}</h2>
      <button type="button" onClick={()=> setcount(count + 1)}>increment count</button>
    </>
  );
}

export default App;
