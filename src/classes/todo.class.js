

export class Todo {

    static fromJson( { id, tarea, completado, creado} ){

        // Llamo al constructor de la clase
        const tempTodo = new Todo( tarea)
         tempTodo.id            = id;
         tempTodo.completado    = completado;
         tempTodo.creado        = creado;
         return tempTodo;
    }

constructor( tarea ){
    this.tarea      = tarea;
    this.id         = new Date().getTime(); //  12846878
    this.completado = false;
    this.creado     = new Date();
}

imprimirClase(){
    console.log( `${ this.tarea } - ${ this.id }` );
}

}
