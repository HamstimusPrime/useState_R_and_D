import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScoreKeeper from './Scorekeeper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScoreKeeper numPlayers={12} />
      <h1>Testing stuff out</h1>
    </>
  )
}

export default App
