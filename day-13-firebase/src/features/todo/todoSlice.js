import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

export const createTodo = createAsyncThunk('todo/createTodo', async (todo, { rejectWithValue }) => {
    try {
        let response = await apiInstance.post('/todo.json', todo);
        return { ...todo, id: response.data.name };
    } catch (error) {
        return rejectWithValue({ error: error.message });
    }
})

export const getAllTodos = createAsyncThunk('todo/getAllTodos',async(_,{rejectWithValue})=>{
    try {
        let response = await apiInstance.get('/todo.json');
        return response;
    } catch (error) {
        return rejectWithValue({error:error.message});
    }
})

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        // create Todo
        builder.addCase(createTodo.fulfilled, (state, action) => {
            console.log(action.payload);
        })
        // Get All Todos
        builder.addCase(getAllTodos.fulfilled,(state,action)=>{
            console.log(action.payload);
            
        }) 
    }
})

export default todoSlice.reducer;