import { Todo } from "./todo.class";

export class TodoList{
    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage(); 
    }

    eliminarTodo( id ){

//      Utilizo el Filter para excluir el Id que recibo y me devuelve un nuevo arreglo         
        this.todos = this.todos.filter( todo => todo.id != id )
        this.guardarLocalStorage();

    }

    marcarCompletado( id ){
        for(const todo of this.todos){            
            if ( todo.id == id ) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        // Filtro todos los todos que no esten completados y los regreso en un nuevo arreglo        
        this.todos = this.todos.filter( todo => !todo.completado )
        this.guardarLocalStorage();
    }

    
    guardarLocalStorage() {
        // Lo guarda el Arreglo como String        
        localStorage.setItem('todo', JSON.stringify( this.todos ));
    }

    cargarLocalStorage(){ 
        // Recupera el String del Storage y lo convierte en Arreglo
        this.todos = ( localStorage.getItem('todo') ) 
                        ?  JSON.parse(localStorage.getItem('todo')) 
                        : [];

        // Metodo Map barre cada uno de los elementos del arreglo y retorna cada uno de los objetos del arreglo mutado
       this.todos = this.todos.map( obj => Todo.fromJson( obj ) )                 
    }

}