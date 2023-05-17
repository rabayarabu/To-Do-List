import TodoList from './workClass.js';

const deleteicons = document.querySelector('.to-do-list');
const deleteTodos = () => {
  deleteicons.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash')) {
      const { id } = e.target;
      const todoclass = new TodoList();
      todoclass.deleteTodos(id);
    }
  });
};

export default deleteTodos;
