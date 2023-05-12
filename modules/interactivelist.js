const interactivelist = () => {
  const allmarked = document.querySelectorAll('.check_box');
  allmarked.forEach((list) => {
    list.addEventListener('change', (e) => {
      const { id } = e.target;
      const todos = JSON.parse(localStorage.getItem('todolist')) || [];
      const matched = todos.find((todo) => todo.index.toString() === id);
      if (matched !== undefined) {
        matched.completed = !matched.completed;
        matched.index = id;
      }
      localStorage.setItem('todolist', JSON.stringify(todos));
    });
  });
};

export default interactivelist;