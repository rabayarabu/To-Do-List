class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(description) {
    const newTodo = {
      index: this.todos.length + 1,
      description,
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  editTodo(oldDescription, newDescription) {
    const todo = this.todos.find((todo) => todo.description === oldDescription);
    if (todo) {
      todo.description = newDescription;
      return true;
    }
    return false;
  }

  updateCompletedStatus(index, completed) {
    const todo = this.todos.find((todo) => todo.index === index);
    if (todo) {
      todo.completed = completed;
      return true;
    }
    return false;
  }

  clearCompletedTodos() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  getTodos() {
    return this.todos;
  }
}

module.exports = TodoList;
