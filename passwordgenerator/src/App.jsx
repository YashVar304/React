import { useState,useCallback, useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordref = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="!@#$%^&*{}()_+"
    }
    for(let i=1; i<=length; i++){
        let char = Math.random() * str.length + 1;
        pass+=str.charAt(char);
    }
    setPassword(pass);

  },[length,numberAllowed,charAllowed])
  const copyToClipboard = useCallback(()=>{
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed])
  return (
      <>
      <div className="w-full max-w-md bg-gray-700 mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500">
        <h1 className="text-white text-center mb-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
        placeholder="Password"
        readOnly
        value={password}
        className="outline-none py-1 px-3 w-full " 
        ref={passwordref}
        />
        <button onClick={copyToClipboard}
        className="bg-blue-700 text-white py-0.5 px-3 outline-none rounded-r-lg">Copy</button>
        </div>
        <div className="flex text-sm gap-1 w-full">
        <div className="flex gap-1">
          <input type="range" 
          min={6}
          max={50}
          value={length} 
          onChange={(e)=>{
            setLength(e.target.value)
          }}/>
          <label>Length:{length} </label>
        </div>
        <div className="flex gap-x-1 text-sm
        ">
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          onChange={()=>{setNumberAllowed((prev)=>!prev)}}
          id="numberInput"
           />
           <label>Number</label>
           <input type="checkbox" 
          defaultChecked={charAllowed}
          onChange={()=>{setCharAllowed((prev)=>!prev)}}
          id="characterInput"
           />
           <label htmlFor="characterInput">Character</label>
        </div>
        </div>
        
        
      </div>
        </>
  )
}

export default App
