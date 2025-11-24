import { useRef, useState } from 'react'
import { FaStar } from "react-icons/fa";
import './App.css'

function App() {
  
    const [feedback,setFeedback] = useState({});
    const [star,setStar] = useState(0);
    const [state,setState] = useState(0);
    
    const handleStar = (val)=>{
      setStar(val);
    }

    const handleMouseEnter = (val)=>{
      setState(val);
    }

    const handleMouseLeave = (val)=>{
      setState(0);
      if(val < star){
        setStar(0);
      }
    }


  return (
    <>
     
      {
        [1,2,3,4,5].map((val,i)=>{
          return (
            <>
              <FaStar 
                color={i < star || i < state ? "gold" : "gray"} 
                onMouseEnter={()=> handleMouseEnter(val)} 
                onMouseLeave={()=> handleMouseLeave(val)} 
                onClick={()=> handleStar(val)} 
              />
            </>
          )
        })
        
      }

    </>
  )
}

export default App
