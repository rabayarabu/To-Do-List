const { editTodos, updateTodos} = require('./updateTodos.js');

describe('editTodos function', () => {
    test('edit the todo', () => {
        const edited = editTodos({
            id: 1,
            task: 'Hello Rabu',
            status: false,
        });
        expect(edited).toBe(edited);
    });
    test('updateTodos function', () => {
        expect(updateTodos(1)).toStringEqual({
            id: 1,
            task: 'Hello Tofa',
            status: true,
        });
    });
});