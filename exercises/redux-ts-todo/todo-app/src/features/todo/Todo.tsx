
import {
  Button,
  Checkbox,  
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addTodos, completeTodo } from "./todoSlice";
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
      <TextField
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        value={todo}
        variant="standard"
      />
      <Button
        className="add-btn"
        onClick={() => {
          dispatch(addTodos(todo));
          setTodo("");
        }}
        variant="contained"
      >
        Add
      </Button>
      <br />
    </div>
  );
};
function TodoList(todoListProps: todoListProps) {
  return (
    <List>
      {todoListProps.todos.map((todo) => {
        return <TodoItem todoItem={todo} key={todo.id.toString()} />;
      })}
    </List>
  );
}
type todoProps = {
  todoItem: Todo;
};
function TodoItem(todoProps: todoProps) {
  // https://mui.com/material-ui/react-list/#checkbox
  const dispatch = useAppDispatch();
  return (
    <ListItem
      className="container"
      onChange={() => {
        dispatch(completeTodo(todoProps.todoItem.id));
      }}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={todoProps.todoItem.isCompleted}
          inputProps={{ "aria-labelledby": todoProps.todoItem.id.toString() }}
        />
      </ListItemIcon>

      <ListItemText
        id={todoProps.todoItem.id.toString()}
        primary={todoProps.todoItem.desc}
      />
    </ListItem>
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
