import React from "react";
import { useAppDispatch } from "./hooks.ts";
import { addTodo1 } from "../store/todoSlice.ts";


interface FormBProps{
  setText:(str:string)=>void;
  title:string;
  id:string;
  completed:boolean;

}

const FormB:React.FC<FormBProps>=({title,setText,id,completed})=>{
  const dispatch=useAppDispatch()
  const addTask=()=>{
    if(title){
      dispatch(addTodo1({title,id,completed}));
    setText('')
    }
    
  }
return(
    <div>FormB
  <label>
    <input value={title} onChange={(e)=>setText(e.target.value)}></input>
    <button onClick={()=>addTask()} >ADD TODO</button>
  </label>

    </div>
)
}
export default FormB