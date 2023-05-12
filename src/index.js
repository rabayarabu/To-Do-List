import './style.css';

import TodoList from '../modules/workClass.js';
import addTodo from '../modules/addTodo.js';
import deleteTodos from '../modules/deleteTodos.js';
import { clearcompletedtodos, refreshpage } from '../modules/clearcompletedtodos.js';

const todoclass = new TodoList();
todoclass.workList();
refreshpage();
addTodo();
deleteTodos();
clearcompletedtodos();
