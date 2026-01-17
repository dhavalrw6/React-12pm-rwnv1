import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo, getAllTodos } from "./features/todo/thunk";

const App = () => {
  const dispatch = useDispatch();
  const {loading,error} = useSelector(state => state.todos)

  useEffect(()=>{
    dispatch(getAllTodos());
  },[]);

  if(loading) return (
    <div className="bg-gray-400 flex justify-center items-center h-screen">
      <h2>Loading....</h2>
    </div>
  )

  if(error) return (
    <div className="bg-red-400 flex justify-center items-center h-screen">
      <h2>{error}</h2>
    </div>
  )

  return (
    <div>
      <button className="py-2 px-3 bg-green-400 rounded-xl m-10 hover:bg-green-500 duration-200 hover:cursor-pointer" onClick={()=> dispatch(createTodo({text:"Hello"}))}>
        Click
      </button>
      <button onClick={()=> dispatch(deleteTodo("-Oj9S3vV7enmgbMB8juJ"))}>
        Delete
      </button>
    </div>
  );
};

export default App;
