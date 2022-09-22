import { useState, useContext } from "react";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { api_routes } from "../config/api_routes";
import { TodoContext } from "../context/TodoContext";

const AddNewTodo = () => {
  const [todoName, setTodoName] = useState("");
  const { todoDispatch } = useContext(TodoContext);

  //add new todo item
  const addTodo = async () => {
    if (!todoName) return;

    try {
      const response = await axios.post(api_routes.addTodo, {
        id: uuidv4(),
        name: todoName,
        status: 0
      });

      todoDispatch({ type: "SET_TODOS", payload: response.data });
      setTodoName("");
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="my-4">
      <div className="input-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Todo name"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button className="btn btn-success" onClick={addTodo}>
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddNewTodo;
