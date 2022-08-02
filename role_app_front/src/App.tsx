import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Masthead from './components/masthead'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Masthead/>
  )
}

export default App
