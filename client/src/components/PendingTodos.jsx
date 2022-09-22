import { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

const PendingTodos = () => {
  const { todoState } = useContext(TodoContext);
  //create filter for pending todo items
  const pendingTodos = todoState.todos?.filter((todo) => todo.status === 0);

  return (
    <div className="pending-todo-container shadow p-3">
      <h5>Pending Todos</h5>

      {pendingTodos?.length === 0 && (
        <h5 className="text-center">You have no pending todos</h5>
      )}

      {pendingTodos?.length !== 0 && (
        <>
          {pendingTodos?.map((todo) => (
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

export default PendingTodos;
