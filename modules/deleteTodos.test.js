const deleteTodo = require('./deleteTodofunctions.js');

describe('deleteTodo', () => {
  let todos;

  beforeEach(() => {
    todos = [
      { id: 1, description: 'Todo 1', completed: false },
      { id: 2, description: 'Todo 2', completed: true },
      { id: 3, description: 'Todo 3', completed: false },
    ];
  });

  afterEach(() => {
    todos = [];
  });

  test('should delete a todo from the list', () => {
    const expectedTodos = [
      { id: 1, description: 'Todo 1', completed: false },
      { id: 3, description: 'Todo 3', completed: false },
    ];

    const updatedTodos = deleteTodo(todos, 2);

    expect(updatedTodos).toEqual(expectedTodos);
  });

  test('should not modify the todos list if ID does not exist', () => {
    const expectedTodos = [...todos];
    const updatedTodos = deleteTodo(todos, 4);

    expect(updatedTodos).toEqual(expectedTodos);
  });
});
