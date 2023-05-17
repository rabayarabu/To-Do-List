const todoList = [];

const addTodoList = (list) => {
  todoList.push(list);
  return todoList;
};

module.exports = addTodoList;