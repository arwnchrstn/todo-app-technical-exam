const API_DOMAIN = "http://localhost:5000";

export const api_routes = Object.freeze({
  getTodo: `${API_DOMAIN}/api/todos`,
  addTodo: `${API_DOMAIN}/api/todos/add`,
  deleteTodo: `${API_DOMAIN}/api/todos/delete`,
  updateTodoStatus: `${API_DOMAIN}/api/todos/update`
});
