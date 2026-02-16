import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold underline">
      Hello world!
      </h1>

      <button className="btn btn-xs">Xsmall</button>
      <button className="btn btn-sm">Small</button>
      <button className="btn">Medium</button>
      <button className="btn btn-lg">Large</button>
      <button className="btn btn-xl">Xlarge</button>

    </>
  )
}

export default App
