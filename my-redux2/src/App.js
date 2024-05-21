import './App.css';
import React from 'react';
import { useState } from 'react';
import TodoList from './components/todoList';
import Form from './components/form';
import AppB from './AppB';
// import Canvas from './can/canvas';

function App() {
  const todosRef = React.useRef
const[todos,setTodos]=useState([])
const[text,setText]=useState('')
///////////////////////////////////////
// let canRef=React.useRef()
// console.log(canRef)
// let t=canRef.current
// console.log(t)
// const ctx=t.getContext('2d')
// console.log(ctx)
/////////////////////////////////////////
todosRef.current=todos
const addTodo =()=>{
  if(text){
  setTodos((todos)=>[...todos,
  {text,
  id: new Date().toISOString(),
  completed:false
  }
  ])
  // console.log(todos)
  setText('')
}
}
// React.useEffect(()=>console.log(todosRef.current),)
const delTodo=(todoId)=>{
  setTodos(todos.filter(todo=>todo.id!==todoId))
  // console.log(todosRef.current)
  }
  const toggleTodo=(todoId)=>{
      setTodos(
        todos.map(
          todo=>{
            if(todo.id!==todoId)return todo
            else{
              return(
                {
                  ...todo,completed:!todo.completed
                }
              )
            }
          }
        )
      )
    
  
  }
  return (
    <div className="App">
      {/* <Form text={text} setText={setText} addTodo={addTodo}/>
      <TodoList todos={todos} delTodo={delTodo} toggleTodo={toggleTodo}/> */}
         {/* <AppB/> */}
         
     
      {/* <h1 ref={canRef} 
      style={{width:'500px',height:'200px',border:'2px solid black'}}>
rrrrrrr
      </h1> */}

    </div>
  );
}

export default App;
