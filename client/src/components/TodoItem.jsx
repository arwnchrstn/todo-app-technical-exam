import { useContext } from "react";

import { FaTrash, FaCheckCircle } from "react-icons/fa";
import axios from "axios";

import { api_routes } from "../config/api_routes";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ id, name, status }) => {
  const { todoDispatch } = useContext(TodoContext);

  //handle delete todo item
  const deleteTodo = async (e) => {
    const todoId = e.currentTarget.dataset.todoid;

    try {
      const response = await axios.delete(api_routes.deleteTodo + `/${todoId}`);

      todoDispatch({ type: "SET_TODOS", payload: response.data });
    } catch (error) {
      alert(error.response.data);
    }
  };

  //handle update todo item
  const updateTodo = async (e) => {
    const todoId = e.currentTarget.dataset.todoid;

    try {
      const response = await axios.put(
        api_routes.updateTodoStatus + `/${todoId}`
      );

      todoDispatch({ type: "SET_TODOS", payload: response.data });
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="todo-item shadow-sm my-2 px-3 py-2 d-flex align-items-center justify-content-between">
      <div className="todo-item-name">{name}</div>
      <div className="todo-item-action">
        <button
          className="btn btn-danger mx-1"
          data-todoid={id}
          onClick={deleteTodo}
        >
          <FaTrash />
        </button>
        {status === 0 && (
          <button
            className="btn btn-success mx-1"
            data-todoid={id}
            onClick={updateTodo}
          >
            <FaCheckCircle />
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
