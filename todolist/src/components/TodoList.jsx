import React from 'react';
import {useTodo} from "../context/index"
import { useState } from 'react';

function TodoList({todo}) {

    const {updateTodo,deleteTodo,toggleComplete} = useTodo()
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const editTodo = ()=>{
        updateTodo(todo.id,{...todo,todo:todoMsg})
        setIsTodoEditable(false);
    }
    const toggleCompleted = ()=>{
        toggleComplete(todo.id)
    }

    return (
        <div className={` flex w-full px-3 justify-between py-1.5 rounded-lg gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed?"bg-[#c6e9a7]":"bg-[#ccbed7]"}`}>
            <input type="checkbox" name="" id=""  checked={todo.completed} onChange={toggleCompleted}/>
            <input type="text" placeholder='TodoItem' className={`border outline-none bg-transparent border-none text-black w-4/5 ${todo.completed?"line-through":""} ${isTodoEditable?"border-black/10 px-2":"border-transparent"}`} value={todoMsg} onChange={(e)=>setTodoMsg(e.target.value)} readOnly={!isTodoEditable} />
            
            <button className=' outline-none  px-3 py-1.5 w-8 h-8 inline-flex justify-center items-center bg-gray-50 hover:bg-gray-100 border-black/10 text-sm border' onClick={()=>{
                if(todo.completed) return
                if(isTodoEditable){
                    editTodo()
                }else{
                    setIsTodoEditable((prev)=>!prev)
                }
            }}
            disabled={todo.completed}>{isTodoEditable?"📁":"✏️"}</button>
            <button className=' outline-none px-3 py-1.5 w-8 h-8 inline-flex justify-center items-center bg-gray-50 hover:bg-gray-100 border-black/10 text-sm border'onClick={()=>{deleteTodo(todo.id)}}>❌</button>
        </div>
    )
}

export default TodoList
