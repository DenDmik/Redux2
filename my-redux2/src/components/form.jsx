import React from "react";

const Form=({text,setText,addTodo})=>{
    return(
    <label>
    <input value={text} onChange={(e)=>setText(e.target.value)}></input>
    <button onClick={addTodo} >ADD TODO</button>
  </label>
    )
}
export default Form