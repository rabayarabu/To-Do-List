const TodoList = require('./TodoList.js');

const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key]),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();
global.localStorage = localStorageMock;

describe('TodoList', () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('editTodo', () => {
    test('should update the description of a to-do item', () => {
      todoList.addTodo('Task 1');
      todoList.addTodo('Task 2');
      todoList.editTodo('Task 1', 'Updated Task');

      const updatedList = todoList.getTodos();
      expect(updatedList[0].description).toBe('Updated Task');
    });
  });

  describe('updateCompletedStatus', () => {
    test('should update the completed status of a to-do item', () => {
      // Set up the initial state
      todoList.addTodo('Task 1');
      todoList.addTodo('Task 2');

      todoList.updateCompletedStatus(1, true);
      const updatedList = todoList.getTodos();
      expect(updatedList[0].completed).toBe(true);
    });
  });

  describe('clearCompletedTodos', () => {
    test('should remove all completed to-do items', () => {
      todoList.addTodo('Task 1');
      todoList.addTodo('Task 2');
      todoList.addTodo('Task 3');

      todoList.updateCompletedStatus(1, true);
      todoList.updateCompletedStatus(3, true);
      todoList.clearCompletedTodos();

      const updatedList = todoList.getTodos();
      expect(updatedList.length).toBe(1);
      expect(updatedList[0].description).toBe('Task 2');
    });
  });
});
