import { createContext, useEffect, useReducer } from "react";

import axios from "axios";

import { api_routes } from "../config/api_routes";
import { todoReducer } from "../reducer/todoReducer";

export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: null });

  const getTodos = async () => {
    try {
      const response = await axios.get(api_routes.getTodo);

      todoDispatch({ type: "SET_TODOS", payload: response.data });
    } catch (error) {
      alert(error.response.data);
    }
  };

  //fetch all todos
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todoState, todoDispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
