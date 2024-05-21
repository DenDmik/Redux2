import { createSlice ,PayloadAction,createAsyncThunk} from "@reduxjs/toolkit";


export const fetchList=createAsyncThunk(
    'list/fetchList',
    async function() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        const data = await response.json()
        return data as Todo[]
        
    }

)

interface Todo{
id:string;
title:string;
completed:boolean;

}

interface TodoState{
    list:Todo[],
    isLoading: string,
    error:string
}

const initialState: TodoState={
    list:[],
    isLoading:'',
    error:''
}


const todoSlice = createSlice(
    {
      name:'list',
      initialState  ,
    reducers:{
        addTodo1(state,action:PayloadAction<Todo>){
            // console.log(state)
            // console.log(action)
            state.list.push(
                {
                    id: new Date().toISOString(),
                    completed:false,
                    title:action.payload.title,
                    
                    
                }
               
            )
            
        },
        removeTodo1(state,action:PayloadAction<Todo>){
            state.list=state.list.filter(todo=>todo.id!==action.payload.id)
        },
        toggleTodoCompleted1(state,action:PayloadAction<Todo>){
        const toggledTodo=state.list.find(todo=> todo.id===action.payload.id)
        if(toggledTodo){
        toggledTodo.completed=!toggledTodo.completed
        console.log(state)
        console.log(action)}
        },
    },
    ///////////////////////////////////////////////
    extraReducers:builder=>{
        builder
        .addCase(fetchList.fulfilled, (state, action:PayloadAction<Todo[]>) => {
            state.isLoading = 'resolved';
            state.list=action.payload
        })
        .addCase(fetchList.pending,(state)=>{
            state.isLoading='loading'
            state.error=''
        })
        // .addCase(fetchList.rejected,(state,action)=>{


        // })
    }
    ////////////////////////////////////////////////
    

    }
)
export const{addTodo1,removeTodo1,toggleTodoCompleted1}=todoSlice.actions
export default todoSlice.reducer;