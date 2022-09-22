import { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

const CompletedTodos = () => {
  const { todoState } = useContext(TodoContext);
  //create filter for completed todo items
  const completeTodos = todoState.todos?.filter((todo) => todo.status === 1);

  return (
    <div className="completed-todo-container shadow p-3">
      <h5>Completed Todos</h5>

      {completeTodos?.length === 0 && (
        <h5 className="text-center">You have no completed todos</h5>
      )}

      {completeTodos?.length !== 0 && (
        <>
          {completeTodos?.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              name={todo.name}
              status={todo.status}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default CompletedTodos;
