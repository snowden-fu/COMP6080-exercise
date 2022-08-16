import { useState } from "react";

/**
 * Todo List composed of TodoItem
 * type todo
 */
export interface Todo {
  id: number;
  desc: string;
  isDone: boolean;
}

type TodoItemProps = {
  todo: Todo;
};
function TodoItem({ todo }: TodoItemProps) {
  const [checkState, setCheckState] = useState(todo.isDone);
  function handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(checkState);

    setCheckState(!checkState);
  }
  return (
    <>
      <input
        type={"checkbox"}
        id={todo.id.toString()}
        name={todo.id.toString()}
        checked={checkState}
        onChange={handleCheck}
      />
      <label htmlFor={todo.id.toString()}>{todo.desc}</label>
      <br></br>
    </>
  );
}
type TodoListProps = {
  todoList: Array<Todo>;
};
export function TodoList({ todoList }: TodoListProps) {
  let listItems = todoList.map((todo) => {
    return <TodoItem todo={todo} key={todo.id} />;
  });
  return <ul>{listItems}</ul>;
}
