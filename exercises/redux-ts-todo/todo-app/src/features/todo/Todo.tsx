import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addTodos } from "./todoSlice";
export interface Todo {
  id: Number;
  isCompleted: boolean;
  desc: String;
}
type todoListProps = {
  todos: Array<Todo>;
};
const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />

      <button
        className="add-btn"
        onClick={() => {
          dispatch(addTodos(todo));
        }}
      >
        Add
      </button>
      <br />
    </div>
  );
};
function TodoList(todoListProps: todoListProps) {
  return (
    <>
      {todoListProps.todos.map((todo) => {
        return <TodoItem todoItem={todo} key={todo.id.toString()} />;
      })}
    </>
  );
}
type todoProps = {
  todoItem: Todo;
};
function TodoItem(todoProps: todoProps) {
  // custom checkbox https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox

  return (
    <label className="container">
      {todoProps.todoItem.desc}
      <input
        type="checkbox"
        checked={todoProps.todoItem.isCompleted}
        // todo: update todo item when onChange
        readOnly
      />
      <span className="checkmark"></span>
    </label>
  );
}
export function TodoApp() {
  const todoSelected = useAppSelector((state) => state.todo);
  return (
    <div className="todoApp">
      <TodoInput />
      <TodoList todos={todoSelected} />
    </div>
  );
}
