import { createSlice } from "@reduxjs/toolkit";

const initialTodoState:boolean = false;
export const todoSlice = createSlice({
    name: 'todoChecked',
    initialState: initialTodoState,
    reducers:{
        check:(state)=>{
            state=true
        },
        uncheck: (state)=>{
            state=false
        }
    }
})
export default todoSlice.reducer