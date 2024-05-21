import {createSlice,nanoid} from '@reduxjs/toolkit'
 const initialState = {
    todos:[
        {
            id:1,
            text:"HelloWorld"
        }
    ]
 }
const todoSlice = createSlice({
    name:"todo",
    initialState: initialState,
    reducers:{
        addTodo: (state,action)=>{
           const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((each)=>each.id!=action.payload.id)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer;