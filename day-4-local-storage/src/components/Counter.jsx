import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("set local");
        let oldCount = JSON.parse(localStorage.getItem('count'))
        setCount(oldCount);
    }, [])

     useEffect(() => {    
        if(count != 0)
            localStorage.setItem("count", count);
    }, [count])


    const handleCount = () => {
        setCount((count) => count + 1);
    }

    return (
        <>
            <h2>Count {count}</h2>
            <button type='button' onClick={handleCount}>Increment</button>
        </>
    )
}

export default Counter
