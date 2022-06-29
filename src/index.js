import './styles.css';


import { Todo, TodoList }       from './classes';
import { crearTodoHtml }        from './js/componentes';

export const todoList = new TodoList();

// Carga los Todos en el HTML utilizando un foreach y se envia como parámetro todo
todoList.todos.forEach(todo => crearTodoHtml( todo ));

// const newTodo = new Todo('Aprender JavaScripts');
// newTodo.imprimirClase();

// todoList.nuevoTodo( newTodo );

console.log( 'Todo', todoList.todos );

