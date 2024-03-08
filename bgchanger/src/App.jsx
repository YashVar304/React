import { useState } from 'react'

function App() {
  let [color, setColor] = useState("olive");

  

  return (
    <div className='w-full h-screen'
    style={{backgroundColor:color}}>
    <div className='fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2'>
      <div className='flex justify-center gap-3 bg-white px-3 py-2 rounded-3xl shadow-lg'>
        <button className='border-0 rounded-xl px-3 py-1 text-white' style={{backgroundColor:'red'}} onClick={()=>setColor("red")}>Red</button>
        <button className='border-0 rounded-xl px-3 py-1 text-white' style={{backgroundColor:'green'}} onClick={()=>setColor("green")}>Green</button>
        <button className='border-0 rounded-xl px-3 py-1 text-white' style={{backgroundColor:'blue'}} onClick={()=>setColor("blue")}>Blue</button>
        <button className='border-0 rounded-xl px-3 py-1 text-white' style={{backgroundColor:'olive'}} onClick={()=>setColor("olive")}>Olive</button>
        <button className='border-0 rounded-xl px-3 py-1 text-white' style={{backgroundColor:'Black'}} onClick={()=>setColor("black")}>Black</button>
        <button className='border-0 rounded-xl px-3 py-1 text-white' style={{backgroundColor:'grey'}} onClick={()=>setColor("grey")}>Gray</button>
        <button className='border-0 rounded-xl px-3 py-1 text-white' style={{backgroundColor:'pink'}} onClick={()=>setColor("pink")}>Pink</button>
        <button className='border-0 rounded-xl px-3 py-1 text-white' style={{backgroundColor:'purple'}} onClick={()=>setColor("purple")}>Purple</button>
        <button className='border-0 rounded-xl px-3 py-1 text-white' style={{backgroundColor:'lavender'}} onClick={()=>setColor("lavender")}>Lavander</button>
        <button className='border-0 rounded-xl px-3 py-1 text-black' style={{backgroundColor:'white'}} onClick={()=>setColor("white")}>white</button>

      </div>
    </div>
    </div>
  )
}

export default App
