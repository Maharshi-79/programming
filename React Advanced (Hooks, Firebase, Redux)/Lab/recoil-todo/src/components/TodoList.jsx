import React from "react";
import { useRecoilValue } from "recoil";
import { todoState } from "../recoil/todoAtom";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useRecoilValue(todoState);

  return (
    <div>
      {todos.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
};

export default TodoList;