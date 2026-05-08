import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="container">
      <h1>Recoil Todo App</h1>

      <TodoForm />

      <TodoList />
    </div>
  );
};

export default App;