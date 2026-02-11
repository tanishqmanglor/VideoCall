import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Videocall from './components/Videocall'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Videocall />
       
    </>
  )
}

export default App
