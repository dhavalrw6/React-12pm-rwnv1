import { createSlice,nanoid } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "Users",
    initialState : {
        users : [],
        editData : {},
        editId : null,
    },
    reducers : {
        addUser : (state,action)=>{
            state.users.push({...action.payload,id:nanoid()})
        },
        deleteUser : (state,action)=>{
            let index = state.users.findIndex((val)=> val.id == action.payload )
            state.users.splice(index,1);
        },
        editUser : (state,action)=>{
            state.editData = state.users.find((val)=> val.id == action.payload)
            state.editId = action.payload;
        },
        updateUser : (state,action)=>{

        }
    }
})

export default userSlice.reducer;
export const {addUser, deleteUser,editUser}  = userSlice.actions;