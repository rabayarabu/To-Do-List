const interactivelist = () => {
  const allmarked = document.querySelectorAll('input[type=checkbox]');
  allmarked.forEach((list) => {
    list.addEventListener('change', (e) => {
      const { id } = e.target;
      const todos = JSON.parse(localStorage.getItem('todolist')) || [];
      const matched = todos.find((todo) => todo.index.toString() === id);
      if (matched !== undefined) {
        matched.completed = !matched.completed;
        matched.index = id;
        e.target.classList.toggle('checked');
        localStorage.setItem('todolist', JSON.stringify(todos));
      }
    });
  });
};

export default interactivelist;