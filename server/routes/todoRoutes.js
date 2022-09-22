const router = require("express").Router();
const todoController = require("../controllers/todoController");

//get all todo router
router.get("/", todoController.getAllTodos);

//add new todo router
router.post("/add", todoController.addTodo);

//delete todo router
router.delete("/delete/:id", todoController.deleteTodo);

//update todo router
router.put("/update/:id", todoController.updateTodoStatus);

module.exports = router;
