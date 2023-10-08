import { useState } from 'react'

function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(6);
  const [isNum, setIsNum] = useState(false);
  const [isSpecialChar, setisSpecialChar] = useState(false);



  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator!</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          placeholder='password'
          className='outline-none w-full py-1 px-3'
          />
                  <button className='outline-none shadow bg-blue-700 text-white px-2 py-1 shrink-0  '>Copy</button>

        </div>
      </div>
    </>
  )
}

export default App
