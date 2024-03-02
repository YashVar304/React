import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../../talwindprops/src/components/Card'


function App() {
 let [counter, setCounter] = useState(0);
  function addNumber(){
    if(counter<20){
    console.log("clicked",counter);
    setCounter(prevCount=>prevCount+1);
    setCounter(prevCount=>prevCount+1);
    setCounter(prevCount=>prevCount+1);
    setCounter(prevCount=>prevCount+1);

  }
  }
  function decreaseNumber(){
    if(counter>0){
    console.log("clicked",counter);
    setCounter(--counter);}
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addNumber}>Add number</button>
      <br />
      <button onClick={decreaseNumber}>decrease number</button>
    </>
  )
}

export default App
