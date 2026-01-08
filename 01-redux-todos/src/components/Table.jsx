import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todos/todoSlice";

const Table = () => {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();
    
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Sr. No</th>
                                <th>Todo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.length > 0 ?
                                    todos.map((val,index)=>{
                                        return (
                                            <tr key={val.id}>
                                                <td>{index + 1}</td>
                                                <td>{val.text}</td>
                                                <td>
                                                    <button type="button" onClick={()=> dispatch(removeTodo(val.id))} className="btn btn-outline-danger">remove</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                : 
                                <tr>
                                    <td className="text-center" colSpan={3}>Todos Not Found.</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
