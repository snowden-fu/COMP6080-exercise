import { createSlice } from "@reduxjs/toolkit";

const initialTodoState:boolean = false;
export const todoSlice = createSlice({
    name: 'todoChecked',
    initialState: initialTodoState,
    reducers:{
        checkOrUncheck:(state)=>{
            state=!state
        },
    }
})


export const { checkOrUncheck } = todoSlice.actions;
export default todoSlice.reducer