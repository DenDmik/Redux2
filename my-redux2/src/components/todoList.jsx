import React from "react";
import Item from "./item";
const TodoList=({todos,delTodo,toggleTodo})=>{
    return(
    <div>
        <ul> {
        
        todos.map(todo=><Item key={todo.id}
            {...todo}
            toggleTodo={toggleTodo} 
            delTodo={delTodo}
        />)
            }
                
        </ul> 
    </div>
    )
}
export default TodoList