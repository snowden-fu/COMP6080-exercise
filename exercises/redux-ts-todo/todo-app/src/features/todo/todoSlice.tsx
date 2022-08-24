import { createSlice } from "@reduxjs/toolkit";
// https://dev.to/codebucks/build-redux-react-todo-list-app-with-animations-using-framer-motion-1mp1
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