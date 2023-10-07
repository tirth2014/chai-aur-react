import { useState } from 'react'
import ColorBtn from './components/ColorBtn'

function App() {

  const [color, setColor] = useState("olive")

  function onChangeColor() {
    console.log(color);
    setColor()
  }

  const colors = {
    olive: "Olive",
    red: "Red",
    yellow: "Yellow",
    blue: "Blue",
    purple: "Purple",
    green: "Green",
    black: "Black",
    grey: "Grey",
    cyan: "Cyan",
    orange: "Orange",
    pink: "Pink",
  }

  return (

    <div className="w-full h-screen"
      style={{ backgroundColor: color }} >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2'>
        {/* <button type="button" onClick={() => setColor('red')}>Red</button> */}

        {Object.entries(colors).map(([colorKey, colorLabel]) =>
          <ColorBtn colorKey={colorKey} colorLabel={colorLabel} onClick={() => setColor(colorKey)}> </ColorBtn>
        )}

        </div>
      </div>
    </div>
  )
}

export default App
