import React from "react";
import { useState } from "react";
import TodosB from "./componentsB/todosB.tsx";
import FormB from"./componentsB/formB.tsx";
import './AppB.css'
// import { addTodo1,toggleTodoCompleted1,removeTodo1 } from "./store/todoSlice";
// import { useDispatch } from "react-redux";

const AppB=()=>{
    const[title,setText]=useState('')
    ////////////////////////////////
    // const dispatch= useDispatch()
    // const addTask=()=>{
    //     dispatch(addTodo1({text}))
    //     setText('')
    // }
    ////////////////////////////////
    return(
        <div className="AppB">
            <h4>AppB</h4>
            <FormB 
            // handleSubmit={addTask} 
            title={title} setText={setText}/>
            <TodosB title={title}/>
        </div>
    )
}
export default AppB