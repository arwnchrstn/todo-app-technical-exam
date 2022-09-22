//I am using an array as a storage for todos
let todos = [];

//get todos controller
const getAllTodos = (req, res) => {
  res.status(200).send(todos);
};

//add new todo controller
const addTodo = (req, res) => {
  const { id, name, status } = req.body;

  //handle error to prevent inserting empty name
  //check if name is empty
  if (!name) return res.status(400).send("Cannot insert an empty todo name");

  //add new todo item to array
  todos.push({
    id,
    name,
    status
  });

  //send the updated list of todos
  res.status(200).send(todos);
};

//delete todo controller
const deleteTodo = (req, res) => {
  const { id } = req.params;

  //delete specific todo item
  const filteredTodo = todos.filter((todo) => todo.id !== id);
  todos = filteredTodo;

  //send the updated list of todos
  res.status(200).send(todos);
};

//update todo status
const updateTodoStatus = (req, res) => {
  const { id } = req.params;

  //find index of todo item to be updated
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  //update todo item status
  todos[todoIndex].status = 1;

  res.send(todos);
};

module.exports = {
  getAllTodos,
  addTodo,
  deleteTodo,
  updateTodoStatus
};
