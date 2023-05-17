import TodoList from './workClass.js';

const inputvalue = document.getElementById('to_do_s');
const enterCreate = document.getElementById('create');
const form = document.getElementById('form');
const addTodo = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = new TodoList(inputvalue);
    todo.createWork();
  });

  enterCreate.addEventListener('click', () => {
    const todo = new TodoList(inputvalue);
    todo.createWork();
  });
};

export default addTodo;
