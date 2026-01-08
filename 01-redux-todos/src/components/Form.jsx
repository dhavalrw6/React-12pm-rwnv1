import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todoSlice.js';

const Form = () => {
  const [todo,setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("")
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-3'>
          <form action="" method="post" onSubmit={handleSubmit}>
            <h3>Todo Application</h3>
            <div className='mb-3'>
              <label htmlFor="text" className='form-label'>Todo</label>
              <input type="text" name="text" value={todo || ''} onChange={(e)=> setTodo(e.target.value)} id="text" className="form-control" />
            </div>
              <button type='submit' className='btn btn-primary'>Add Todo</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
