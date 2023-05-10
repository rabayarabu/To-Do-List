import './style.css';

const todos = [{
  index: 1,
  description: 'Doctor appointment',
  completed: false,
},
{
  index: 2,
  description: 'Exam preparartion',
  completed: false,
},
{
  index: 3,
  description: 'Ellectric bill pay',
  completed: false,
},
{
  index: 4,
  description: 'Shopping',
  completed: false,
},
];
// const todoclass = new TodoList();
// todoclass.workList();
// addTodo();

const workList = () => {
  const worklist = document.querySelector('.to-do-list');
  const deleteBtn = document.getElementById('delete');

  deleteBtn.style.display = 'none';

  if (todos.length > 0) {
    worklist.innerHTML = todos.map((todo) => `<li class="each-todo"><input type="checkbox"> <p>${todo.description}</p><i class="fa-solid fa-trash"></i></li>`).join('');
    deleteBtn.style.display = 'block';
  }
};

workList();