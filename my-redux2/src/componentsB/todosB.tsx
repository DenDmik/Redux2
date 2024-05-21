import React from "react";
import { useAppDispatch, useAppSelector } from "./hooks.ts";
import { useEffect } from "react";
import { fetchList } from "../store/todoSlice.ts";

import ItemB from "./itemB.tsx";
const TodosB:React.FC=()=>{
const todos = useAppSelector(state => state.todosA.list);
console.log(todos)
const dispatch=useAppDispatch()
useEffect(()=>{dispatch(fetchList())},[dispatch])
    return (
        <ul>
            {
            todos.map((todo)=>(<ItemB key={todo.id} {...todo}/>))
            }
        TodosB
        </ul>

    )
}
export default TodosB