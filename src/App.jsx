import { useState } from 'react'
import Logo from "./assets/Coding.png"
import './App.css'

function App() {

  const [color,setColor] = useState("#000");

  return (
    <>
      <div className='w-full h-screen flex flex-col justify-between items-center p-5' style={{backgroundColor: color}}>
          <div className='flex flex-col gap-5 items-center'>
          <div>
              <img className='rounded-full' src={Logo} alt="logo" />
          </div>
          <div>
              <h1 className='text-4xl text-teal-400 font-bold text-center'>Background Changer</h1>
          </div>
          </div>
          <div className='bg-gray-800 flex gap-5 p-5 rounded-lg'>
              <button
              onClick={() => setColor("red")} 
              className='bg-red-500 px-6 py-3 rounded-lg text-white'>Red</button>
              <button
              onClick={() => setColor("green")} 
               className='bg-green-500 px-6 py-3 rounded-lg text-white'>Green</button>
              <button
              onClick={() => setColor("teal")} 
               className='bg-teal-500 px-6 py-3 rounded-lg text-white'>Teal</button>
              <button
              onClick={() => setColor("purple")} 
               className='bg-purple-500 px-6 py-3 rounded-lg text-white'>Purple</button>
              <button
              onClick={() => setColor("cyan")} 
               className='bg-cyan-500 px-6 py-3 rounded-lg text-white'>Cyan</button>
              <button
              onClick={() => setColor("yellow")} 
               className='bg-yellow-500 px-6 py-3 rounded-lg text-white'>Yellow</button>
              <button
              onClick={() => setColor("blue")} 
               className='bg-blue-500 px-6 py-3 rounded-lg text-white'>Blue</button>
          </div>
      </div>
    </>
  )
}

export default App
