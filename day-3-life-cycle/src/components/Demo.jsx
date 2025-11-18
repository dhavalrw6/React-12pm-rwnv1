import React, { useEffect } from 'react'

const Demo = () => {
    useEffect(()=>{
        console.log("component mount..");
        return (()=>{
            console.log("Component unmount...");
        })
    },[]);
  return (
    <>
     <h3>Hello From Demo</h3> 
    </>
  )
}

export default Demo
