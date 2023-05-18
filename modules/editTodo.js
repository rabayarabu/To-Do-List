import TodoList from './TodoList.js';

const editTodo = (oldDescription, newDescription) => {
  const todoList = new TodoList();
  const todos = todoList.getTodos();

  todos.forEach((todo) => {
    if (todo.description === oldDescription) {
      todo.description = newDescription;
    }
  });

  todoList.updateTodos(todos);
};

module.exports = editTodo;
