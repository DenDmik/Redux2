import React from "react";
const Item =({text,id,completed,toggleTodo,delTodo})=>{
    return(
    
<li  >
            <input type='checkbox'
            checked={completed} 
            onChange={()=>toggleTodo(id)}></input>
            <span>{text}</span>
            <span className='delete' onClick={()=>delTodo(id)}>&times;</span>
          </li>
    
    )
}
export default Item