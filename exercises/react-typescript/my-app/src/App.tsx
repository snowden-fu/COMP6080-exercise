import logo from "./logo.svg";
import "./App.css";
import { useReducer, useState } from "react";

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
      <VoteCounter/>
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


const initialState = { votes: 0 };
enum VoteCounterActionType{
  DOWNVOTE ='downvote',
  UPVOTE = 'upvote'
}
interface VoteCounterAction{
  type:VoteCounterActionType
}
interface VoteCounterState {
  votes: number
}
function reducer(state: VoteCounterState, action:VoteCounterAction) {
  switch (action.type) {
    case VoteCounterActionType.UPVOTE:
      return {votes: state.votes + 1};
    case VoteCounterActionType.DOWNVOTE:
      return {votes: state.votes - 1};
    default:
      throw new Error();
  }
}
function VoteCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const upvoteHandler = () => dispatch({ type: VoteCounterActionType.UPVOTE });
  return (
    <>
    <h1>Value {state.votes}</h1>
    {/* todo upvote and downvote is recognized 
    type error is weird
    */}
    <button onClick={upvoteHandler}>Upvote</button>
      <button onClick={() => dispatch({type: VoteCounterActionType.DOWNVOTE})}>Downvote</button>
    </>
    
  )
  
}
export default App;
