import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://react-typescript-cheatsheet.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          quick start for react in typescript
        </a>
      </header>
      <TodoList todoList={todoData} />
    </div>
  );
}
interface Todo {
  id: number;
  desc: string;
  isDone: boolean;
}
const todoData: Array<Todo> = [
  { id: 1, desc: "coding", isDone: false },
  { id: 2, desc: "coding2", isDone: false },
  { id: 3, desc: "coding3", isDone: false },
];
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
function TodoList({ todoList }: TodoListProps) {
  let listItems = todoList.map((todo) => {
    return <TodoItem todo={todo} key={todo.id} />;
  });
  return <ul>{listItems}</ul>;
}
export default App;
