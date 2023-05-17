const addTodoList = require('../_mock_/addTodo.js');

describe('addTodoList function ', () => {
  test('when the user add a list it should not be empty', () => {
    const newList = addTodoList(
      {
        task: 'Add new list',
        id: 1,
        status: false,
      },
    );
    expect(newList).not.toBe('');
  });
});