import { createSlice } from "@reduxjs/toolkit";

/**
 * official online -- https://redux.js.org/introduction/examples#todos\
 */
export const todoSlice = createSlice(
    {
        name:"todoChecker",
        initialState: {
            isChecked: false
        },
        reducers:{
            // todo add reducers
        }
    }
)
export default todoSlice.reducer;