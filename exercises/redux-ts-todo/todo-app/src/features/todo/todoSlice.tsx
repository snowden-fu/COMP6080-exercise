import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "./todo";
// https://dev.to/codebucks/build-redux-react-todo-list-app-with-animations-using-framer-motion-1mp1
const initialTodoState: Array<Todo> = [];
export const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    addTodos: (state, action) => {
      const newTodo: Todo = generateTodo(action.payload);
      //   console.log(newTodo);

      state.push(newTodo);
      //   console.log(state.length);
      return state;
    },
    completeTodo: (state, action) => {
      return state.map((i) => {
        if (i.id === action.payload) {
          const newTodo: Todo = {
            ...i,
            isCompleted: true,
          };

          return newTodo;
        }
        return i;
      });
    },
  },
});

function generateTodo(desc: String): Todo {
  return {
    id: Math.floor(Math.random() * 1000),
    isCompleted: false,
    desc: desc,
  };
}

export const { addTodos, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
