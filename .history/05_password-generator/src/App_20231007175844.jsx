import { useCallback, useState } from 'react'

function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(6);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [spCharAllowed, setSpCharAllowed] = useState(false);

  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  // const cachedFn = useCallback(fn, dependencies)

  const passwordGenerator = useCallback(
    ()=> {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numsAllowed) str += "0123456789"
      if (spCharAllowed) str += "!@#$%^&*-_+=[]{}~`"

      for (let i = 0; i <= length; i++) {
        pass += Math.floor(Math.random() * str.length + 1);      
      }

      setPassword(pass);

    } , [length,numsAllowed,spCharAllowed,setPassword] )


  return (
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator!</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            placeholder='password'
            readOnly
            className='outline-none w-full py-1 px-3'
          />
          <button className='outline-none shadow bg-blue-700 text-white px-2 py-1 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            name="passLength"
            id="passLength" 
            min={6}
            max={20}
            onChange={(e) => setLength(e.currentTarget.value)} 
            />
            <label htmlFor="passLength" >Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            id='numsAllowed'
            defaultChecked={numsAllowed}
            onChange={() => setNumsAllowed((prev) => !prev)}
            />
            <label htmlFor="numsAllowed">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            id='spCharAllowed'
            onChange={() => setSpCharAllowed((prev) => !prev)}
            defaultChecked={spCharAllowed}
            />
            <label htmlFor="spCharAllowed">Special Characters</label>
          </div>

        </div>
      </div>
  )
}

export default App
