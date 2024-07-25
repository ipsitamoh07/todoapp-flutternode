const ToDoService = require('../services/todo.services');

exports.createTodo = async (req, res, next) => {
  try {
    const { userId, title, description } = req.body;

    // Correctly reference ToDoService to create a new todo item
    let todo = await ToDoService.createTodo(userId, title, description);

    res.json({ status: true, success: todo });
  } catch (error) {
    next(error);
  }
};
exports.getUserTodo = async (req, res, next) => {
    try {
      const { userId } = req.body;
      const todo = await ToDoService.getTodoData(userId);
      res.json({ status: true, success:todo });
    } catch (error) {
      next(error);
    }
  };
  