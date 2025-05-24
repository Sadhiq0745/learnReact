import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl bg-slate-600 p-10'> Toggling bar....</h1>
    </>
  )
}

export default App
