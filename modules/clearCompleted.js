import TodoList from './TodoList.js';

const clearCompletedTodos = () => {
  const todoList = new TodoList();

  let todos = todoList.getTodos();
  todos = todos.filter((todo) => !todo.completed);

  todos.forEach((todo, index) => {
    todo.index = index + 1;
  });

  todoList.updateTodos(todos);
};

module.exports = clearCompletedTodos;
