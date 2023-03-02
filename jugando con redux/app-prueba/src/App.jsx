import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Acciones from './componentes/Acciones'
import PokeDesck from './componentes/PokeDesck'
import PokeDetail from './componentes/PokeDetail'
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <HashRouter>
        <Routes>
          <Route path='/pokemon/:id' element={<PokeDetail/>}/>
          <Route path='/' element={<PokeDesck/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
