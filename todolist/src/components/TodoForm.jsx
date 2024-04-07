import React, { useState } from 'react'
import {useTodo} from "../context/index"

function TodoForm() {
    const [todo,setTodo] = useState("")
    
    const {addTodo} = useTodo();
    const add =(e)=>{
        e.preventDefault();
        console.log(todo)
        if(!todo) return

        addTodo({id:Date.now(),todo:todo,completed:false})
        setTodo("")
        
    }
    return (
        <form  className='flex mb-4' onSubmit={add}>
            <input  type="text" className='w-full  rounded-l-lg px-3 py-1.5 outline-none bg-white/20' placeholder='Write Todo...' onChange={(e)=>{
                setTodo(e.target.value)}} value={todo}/>
            <button type='submit' className='text-white bg-green-400 rounded-r-lg px-3 py-1.5 shrink-0 rounded-l-none outline-none ' >Add</button>
        </form>
    )
}

export default TodoForm
