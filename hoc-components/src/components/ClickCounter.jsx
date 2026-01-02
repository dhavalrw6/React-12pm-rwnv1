import React from 'react'
import CounterWrapper from '../hoc/CounterWrapper'

const ClickCounter = ({count,incrementCount}) => {
  return (
    <div>
      <h2>Click Count: {count}</h2>
      <button type='button' onClick={incrementCount}>Click</button>
    </div>
  )
}

export default CounterWrapper(ClickCounter)
