import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'
const Yash = "Yash Varshney"
const Coffee = React.createElement('a',{'href':"https://www.google.com",'target':"_blank"},"Click to visit google",Yash)

ReactDOM.createRoot(document.getElementById('root')).render(
  Coffee
)
