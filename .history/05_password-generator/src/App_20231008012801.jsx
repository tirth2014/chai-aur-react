import { useCallback, useEffect, useState, useRef } from 'react'

function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(6);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [spCharAllowed, setSpCharAllowed] = useState(false);

  const passwordRef = useRef(null)

  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  // const cachedFn = useCallback(fn, dependencies)

  const passwordGenerator = useCallback(
    ()=> {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numsAllowed) str += "0123456789"
      if (spCharAllowed) str += "!@#$%^&*-_+=[]{}~`"

      for (let i = 1; i <= length; i++) {
        const strIdx = Math.floor(Math.random() * str.length + 1);  
        pass += str.charAt(strIdx);    
      }

      setPassword(pass);

    } , [length,numsAllowed,spCharAllowed] )
    // } , [length,numsAllowed,spCharAllowed,setPassword] )
    // we should not include setPassword in the useCallback dependency array, because when this functional component re-renders, 
    // the reference of the setPassword function would be different from the setPassword function on previous render. 
    // So this would again create the function. This would totally defy the reason why we are using useCallback 
    // as the function would again be created on every re-render.

    useEffect(()=> {
      passwordGenerator();
    }, [length, numsAllowed, spCharAllowed, passwordGenerator])

    const copyPassToClipboard = () => {
      passwordRef.current?.select();  // select the copied text. So, that user can know it's copied!
      // passwordRef.current?.setSelectionRange(0, 10);
      window.navigator.clipboard.writeText(password)
    }


  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator!</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            placeholder='password'
            readOnly
            ref = {passwordRef}
            className='outline-none w-full py-1 px-3'
          />
          <button className='outline-none shadow bg-blue-700 text-white px-2 py-1 shrink-0' onClick={copyPassToClipboard}>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            name="passLength"
            id="passLength" 
            min={6}
            max={20}
            value={length}  // If value is not given then even for minLen the cursor will point at maxLen on reload
            className='cursor-pointer'
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
      </div>
  )
}

export default App
