import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Views from './components/Views'
import Record from './components/Record'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Views/>
      <Record/>
      <Add/>
    </>
  )
}

export default App
