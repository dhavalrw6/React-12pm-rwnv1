import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'Todo',
    initialState : {
        todos : []
    },
    reducers : {
        addTodo(state,action){
            let todo = {
                id : Date.now(),
                text : action.payload
            }
            state.todos.push(todo);
        },
        removeTodo(state,action){
            const id = action.payload;
            state.todos = state.todos.filter(val => val.id != id)
        }
    }
})

export default todoSlice.reducer;
export const {addTodo,removeTodo} = todoSlice.actions;