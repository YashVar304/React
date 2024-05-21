import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';



function TodoForm() {
    
const dispatch = useDispatch();
    const [input,setInput] = React.useState()
    function handleSubmit(e){
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="" id="" className='full rounded-l-lg px-3 py-1.5 outline-none' placeholder='Add Todo' onChange={(e)=>setInput(e.target.value)} value={input}/>
            <button type="submit" className='bg-[#f1d10b] text-[#c41a60] rounded-r-lg px-3 py-1.5'>Add</button>
        </form>
    )
}

export default TodoForm
