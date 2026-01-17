import { createSlice } from "@reduxjs/toolkit"
import { createTodo, deleteTodo, getAllTodos } from "./thunk";

const todoSlice = createSlice({
    name : "todos",
    initialState : {
        todos : [],
        loading : false,
        error : null,
    },
    reducers:{

    },
    extraReducers : (builder)=>{

        // create todo 
        builder.addCase(createTodo.fulfilled,(state,action)=>{
            state.todos.push(action.payload);
            state.loading = false;
        })

        builder.addCase(createTodo.pending,(state)=>{
            state.loading = true;
        })

        builder.addCase(createTodo.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        builder.addCase(getAllTodos.fulfilled,(state,action)=>{
            state.loading = false;
            state.todos = action.payload;
        })

        builder.addCase(getAllTodos.pending,(state)=>{
            state.loading = true;
        })

        builder.addCase(deleteTodo.fulfilled,(state,action)=>{
            state.loading = false;
            state.todos = state.todos.filter(val => val.id != action.payload);
        })

    }
})

export default todoSlice.reducer;