const deleteTodo = (todos, id) => todos.filter((todo) => todo.id !== id);

module.exports = deleteTodo;
