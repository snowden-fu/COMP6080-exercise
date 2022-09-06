import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Todo, TodoApp } from './features/todo/todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <main>
      <Counter />
      <TodoApp/>
      </main>
    </div>
  );
}
export const todoData: Array<Todo> = [
  { id: 1, desc: "coding", isCompleted: false },
  { id: 2, desc: "coding2", isCompleted: false },
  { id: 3, desc: "coding3", isCompleted: false },
];

export default App;
