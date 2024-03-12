import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

import { TodosProvider } from "../context/TodosContext";

function TodosLogic() {
 
  return (
    <>
      <TodosProvider>
        <InputTodo />
        <TodosList />
      </TodosProvider>
    </>
  );
}

export default TodosLogic;
