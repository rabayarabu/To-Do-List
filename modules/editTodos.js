import TodoList from './workClass.js';

const editedTodos = (description, id) => {
  const Todos = JSON.parse(localStorage.getItem('todolist')) || [];
  if (description === '') {
    alert('please try something else');
  } else {
    const edit = Todos.find((todo) => todo.index.toString() === id);
    if (edit !== undefined) {
      edit.description = description;
      edit.index = id;
      localStorage.setItem('todolist', JSON.stringify(Todos));
    }
    const refresh = new TodoList();
    refresh.workList();
    document.location.reload();
  }
};

const editTodo = () => {
  const selected = document.querySelectorAll('.text');
  for (let i = 0; i < selected.length; i += 1) {
    selected[i].addEventListener('click', (e) => {
      const { id } = e.target;
      const input = document.createElement('input');
      const inputvalue = selected[i].textContent;
      selected[i].textContent = '';
      input.setAttribute('type', 'text');
      selected[i].appendChild(input);
      input.focus();
      input.value = inputvalue;
      input.addEventListener('focusout', () => {
        editedTodos(input.value, id);
      });
    });
  }
};

export default editTodo;