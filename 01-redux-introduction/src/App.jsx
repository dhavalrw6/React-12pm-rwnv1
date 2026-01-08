import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counterSlice';

function App() {
  const {count} = useSelector(state=> state.counter)
  const dispatch = useDispatch();

  return (
    <>
      <h2>counter: {count}</h2>
      <button type='button' onClick={()=> dispatch(increment())} >increment</button>
      <button type='button' onClick={()=> dispatch(decrement())} >decrement</button>
    </>
  )
}

export default App
