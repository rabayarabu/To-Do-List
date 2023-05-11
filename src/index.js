import './style.css';

import TodoList from '../modules/workClass.js';
import addTodo from '../modules/addTodo.js';
import deleteTodos from '../modules/deleteTodos.js';
import editTodo from '../modules/editTodos.js';

const todoclass = new TodoList();
todoclass.workList();
addTodo();
deleteTodos();
editTodo();
