import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './component/Contact.jsx'
import GitHub, { githubInfoLoader } from './component/GitHub.jsx'
 const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>} >
    <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contactus' element={<Contact/>}/>
    <Route 
    loader={githubInfoLoader}
    path='github'
     element={<GitHub
     />}></Route>
  </Route>
 ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={(router)}></RouterProvider>
  </React.StrictMode>,
)
