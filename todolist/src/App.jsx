import { useEffect, useState } from 'react'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { TodoContextProvider } from './context'

function App() {
  
  const [todos,setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=>
      [{...todo},...prev]
    )
  }
  const updateTodo = (id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>{prevTodo.id===id?todo:prevTodo}))
  }
  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id != id))
  }
  const toggleComplete = (id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }
  useEffect(()=>{
    let todos = JSON.parse( localStorage.getItem("todos"))
    if(todos && todos.length>0){
      
      setTodos(todos)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  

  return (
    <TodoContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete,setTodos}}>
      <div className='bg-[#172842] min-h-screen '>
    <div className='w-full max-w-2xl mx-auto shadow-md rounded-md text-white px-4 py-3 flex flex-col items-center'>
      <h1 className='text-2xl font-bold mb-8 mt-2'>Manage Your ToDo</h1>
      <div className='max-w-lg w-full'>
         <TodoForm/>
      </div>
      <div className='gap-y-3 w-full flex flex-col justify-center items-center'>
       {todos && todos.map((todo)=>(
        <div className="w-full max-w-lg" key={todo.id}>
          <TodoList todo={todo}/>
        </div>
       ))}
      </div>
    </div>

   </div>
    </TodoContextProvider>
   
  )
}

export default App
