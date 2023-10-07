// Goal of this counter project: To understand why do we need hooks?

import { useState } from 'react';
import './App.css'

// Here is the problem.
// counter variable's value is updated behind the scenes from Increase and Decrease buttons
// but, in UI, the value is same as original. which is 10
// Here's where React says, I'll handle the game whenever UI change is needed.
// We can actually do this using plain JS also.
// "useState" hook of React solves this issue. It propagates the change to DOM.


function App() {

  let [counter, setCounter] = useState(10)

  const onIncrease = () => {
    if (counter >20){
      throw alert("Bro plz keep it till 20!")
    }
    // This will NOT increase the count value by 3... but by 1 only
    // setCounter(counter+1) 
    // setCounter(counter+1) 
    // setCounter(counter+1) 
    
    // This will increase the count value by 3... but by 1 only
    setCounter(prevCounter => prevCounter+1)                                 
    setCounter(prevCounter => prevCounter+1)                                 
    setCounter(prevCounter => prevCounter+1)             
    
// 1. Without Functional State Update:
// Using setCounter(counter+1) multiple times.
// React schedules three separate state updates, but all of them are based on the current initial value of counter, 
// which is not updated between the calls. As a result, React batches these updates together, 
// and you end up with the same value added to the state three times.

// 2. With Functional State Update:
// Using setCounter(prevCounter => prevCounter+1) multiple times.
// Uses a callback function that takes the previous state value.
// Guarantees the most up-to-date state value is used for each update.
// Results in multiple updates, and each correctly adds 1 to the previous state value, yielding the expected sum.

  }
  const onDecrease = () => {
    if (counter < 0){
      throw alert("बस भाई 0 तक ही ले जा सकता है तू !")
    }
    setCounter(counter-1)
  }

  // let counter = 10;
  return (
    <>
      <h1>My Counter App!</h1>
      <h2>Count: {counter}</h2>
      <button onClick={onIncrease}>Increase Count</button>
      <button onClick={onDecrease}>Decrease Count</button>
      <p>footer: {counter}</p>
      <p>Made with ❤️ by learning from Chai Aur React!</p>
    </>
  )
}

export default App
