import { useState } from 'react'
import TodoForm from './Components/TodoForm'
import { Provider } from 'react-redux'
import store from './App/store'
import TodoList from './Components/TodoList'
function App() {

  return (
    <Provider store={store}>
    <div className='h-screen w-screen  '>
      <div className='h-full max-w-2xl bg-[#c41a60] mx-auto shadow-md px-3 py-5 rounded-lg flex flex-col items-center'>
        <h1 className='font-light text-4xl  text-[#f1d10b] mb-9'>Manage your Todo</h1>
      <TodoForm/>
      <h1 className='font-medium  text-2xl  text-[#f1d10b] my-3 '>Todos</h1>
      <TodoList/>
      </div>
      
    </div>
    </Provider>
  )
}

export default App
