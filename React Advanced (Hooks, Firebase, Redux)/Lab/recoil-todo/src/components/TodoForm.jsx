import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../recoil/todoAtom";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useRecoilState(todoState);

  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoForm;