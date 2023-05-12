import TodoList from './workClass.js';

const clearcompletedtodos = () => {
  const clearbtn = document.getElementById('delete');
  clearbtn.addEventListener('click', () => {
    let todos = JSON.parse(localStorage.getItem('todolist')) || [];
    todos = todos.filter((todo) => !todo.completed);
    todos.forEach((todo, index) => { todo.index = index + 1; });
    localStorage.setItem('todolist', JSON.stringify(todos));
    const displaytodo = new TodoList();
    displaytodo.workList();
  });
};

const refreshpage = () => {
  const refresh = document.getElementById('refresh');
  refresh.addEventListener('click', () => {
    document.location.reload();
  });
};

export { clearcompletedtodos, refreshpage };