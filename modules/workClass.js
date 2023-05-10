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
      worklist.innerHTML = works.map((work) => `<li class="each-todo"><input type="checkbox"> <p>${work.description}</p><i class="fa-solid fa-trash"></i></li>`).join('');
      deleteBtn.style.display = 'block';
    }
  }

  createWork() {
    const Works = JSON.parse(localStorage.getItem('todolist')) || [];
    if (this.description.value === '') {
      alert('please fill up the field');
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
}
export default TodoList;