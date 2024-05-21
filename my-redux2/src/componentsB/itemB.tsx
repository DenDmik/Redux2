import React from "react";
import { useAppDispatch } from "./hooks.ts";
import { removeTodo1 } from "../store/todoSlice.ts";
import { toggleTodoCompleted1 } from "../store/todoSlice.ts";

interface TodoItemsProps{
id:string;
title:string;
completed:boolean;
}

const ItemB:React.FC<TodoItemsProps>=({title,id,completed})=>{

    const dispatch=useAppDispatch()
      
    
    return(
        <li>
            <input type='checkbox'
            checked={completed} 
            onChange={()=>dispatch(toggleTodoCompleted1({id,title,completed}))}
            >

            </input>
 <span>{title}</span>
 <span className='delete' onClick={()=>dispatch(removeTodo1({id,title,completed}))}>&times;</span>
            

          
        </li>
    )
}
export default ItemB