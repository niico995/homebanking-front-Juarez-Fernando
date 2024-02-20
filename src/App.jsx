import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Cards from './pages/Cards'
import Loans from './pages/Loans'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Loans/>
    </>
  )
}

export default App
