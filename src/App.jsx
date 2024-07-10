import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Views from './components/Views'
import Record from './components/Record'
import Add from './components/Add'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Views/>
     <Routes>
      <Route path='/' element={<Record/>}></Route>
      <Route path='/add' element={<Add person={{NAME:'Stevin', ID:'B22CS111',DEPT:'English',SEM:'s5',cgpa:'10'}}/>}></Route>
     </Routes>
    </>
  )
}

export default App
