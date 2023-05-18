const todos = [
    {
        id: 1, 
        task: 'Hello Emmanuel', 
        status: false
    }, 
    {
        id: 2, 
        task: 'Hello Tofa', 
        status: false
    }
];
const editTodos = (todos) => {
    const todo = todos.find((todo) => todo.id === todos.id);
    todo.task = todos.task;
};

const updateTodos = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    todo.status = true;
    return todo;
}

module.exports = { editTodos, updateTodos } 