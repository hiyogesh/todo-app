import React, { useContext } from "react";
import TodoItem from "./TodoItem";

import { useTodosContext } from "../context/TodosContext";

function TodosList() {
  const { todos } = useTodosContext();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </ul>
  );
}

export default TodosList;
