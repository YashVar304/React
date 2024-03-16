import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <div className='bg-slate-700 text-yellow-50  '>
      <h1>
        Yash Varshney
      </h1>
      <Login/>
      <Profile/>
      </div>
      
      
    </UserContextProvider>
  )
}

export default App
