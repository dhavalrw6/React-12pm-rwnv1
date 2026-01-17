import React from 'react'
import { useDispatch } from 'react-redux'
import { createTodo, getAllTodos } from './features/todo/todoSlice';

const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=> dispatch(createTodo({text:"My Todo"}))} >Click</button>
      <button onClick={()=> dispatch(getAllTodos())} >Get</button>
    </div>
  )
}

export default App
