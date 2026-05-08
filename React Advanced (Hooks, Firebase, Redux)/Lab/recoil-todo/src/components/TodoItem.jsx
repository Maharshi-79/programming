import React from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../recoil/todoAtom";

const TodoItem = ({ todo }) => {
  const [todos, setTodos] = useRecoilState(todoState);

  const toggleComplete = () => {
    const updatedTodos = todos.map((item) =>
      item.id === todo.id
        ? { ...item, completed: !item.completed }
        : item
    );

    setTodos(updatedTodos);
  };

  const removeTodo = () => {
    const filteredTodos = todos.filter(
      (item) => item.id !== todo.id
    );

    setTodos(filteredTodos);
  };

  return (
    <div className="todo-item">
      <span
        onClick={toggleComplete}
        className={todo.completed ? "completed" : ""}
      >
        {todo.text}
      </span>

      <button onClick={removeTodo}>Delete</button>
    </div>
  );
};

export default TodoItem;