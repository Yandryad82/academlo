import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import PokeTypes from './components/PokeTypes'

function App() {
  //const [count, setCount] = useState(0)
        
  return (
    <div className="App">
      <PokeTypes/>
    </div>
  )
}

export default App
