import TodoList from './TodoList.js';

const updateCompletedStatus = (index, completed) => {
  const todoList = new TodoList();

  const todos = todoList.getTodos();
  todos.forEach((todo) => {
    if (todo.index === index) {
      todo.completed = completed;
    }
  });
  todoList.updateTodos(todos);
};

module.exports = updateCompletedStatus;
