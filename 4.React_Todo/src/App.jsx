import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const ref=useRef()

console.log(ref)
  return (
    <>
    <input type="text"  ref={ref} />
    <button onClick={()=>{
      ref.current.focus()
      console.log(ref.current.value)
    }}>focus</button>
    </>
  )
}

export default App
