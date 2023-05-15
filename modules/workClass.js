import interactivelist from './interactivelist.js';

class TodoList {
  constructor(description) {
    this.description = description;
  }

  workList() {
    const worklist = document.querySelector('.to-do-list');
    const deleteBtn = document.getElementById('delete');
    const works = JSON.parse(localStorage.getItem('todolist')) || [];

    deleteBtn.style.display = 'none';

    if (works.length > 0) {
      this.id = 0;
      worklist.innerHTML = works.map((work) => {
        if (work.completed === true) {
          return `<li class="each-todo"><input type="checkbox" checked class="check_box" id=${work.index} required> <p class="text-todo" id=${work.index}>${work.description}</p><i class="fa-solid fa-trash" id=${work.index}></i></li>`;
        }
        return `<li class="each-todo"><input type="checkbox" class="check_box" id=${work.index} required> <p class="text-todo" id=${work.index}>${work.description}</p><i class="fa-solid fa-trash" id=${work.index}></i></li>`;
      }).join('');
      deleteBtn.style.display = 'block';
    } else {
      worklist.innerHTML = 'its empty';
    }
    this.editTodo();
    interactivelist();
  }

  createWork() {
    const Works = JSON.parse(localStorage.getItem('todolist')) || [];
    if (this.description.value === '') {
      const errormsg = document.createElement('div');
      errormsg.innerHTML = '<p>Please fill up the field</p>';
    } else {
      const index = Works.length + 1;
      Works.push({
        index,
        description: this.description.value,
        completed: false,

      });
      localStorage.setItem('todolist', JSON.stringify(Works));
      this.description.value = '';
      this.workList();
    }
  }

  deleteTodos(id) {
    const works = JSON.parse(localStorage.getItem('todolist')) || [];
    const search = works.filter((work) => work.index.toString() !== id);
    search.forEach((work, index) => { work.index = index + 1; });
    localStorage.setItem('todolist', JSON.stringify(search));
    this.workList();
  }

  editedTodos(description, id) {
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
      this.workList();
    }
  }

  editTodo() {
    const selected = document.querySelectorAll('.text-todo');
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
          this.editedTodos(input.value, id);
        });
      });
    }
  }
}

export default TodoList;