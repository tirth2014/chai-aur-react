import { useState } from 'react'
import './App.css'
import '../components/Mycard'
import Mycard from '../components/Mycard'

function App() {
  const [count, setCount] = useState(0)
  
  let myObj = {
    name: "Tirth",
    age: 22,
    img:"https://images.unsplash.com/photo-1564568979181-0b86b0f1f2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  }
  let myObj2 = {
    name: "Dianna",
    age: 24
  }

  return (
    <>
      <h1 className='bg-slate-300 p-4 rounded-xl font-bold text-black mb-4'>SociaLy!</h1>
      <Mycard obj={myObj} txt ="Visit me"/>
      <Mycard obj={myObj2} txt="Aao kabhi haweli pe"/>
      </>
  )
}

export default App
