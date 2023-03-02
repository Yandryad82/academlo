import { useState } from 'react'
import '../src/css/styles.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
     <div className="container">
      <div className="row">
        <div className="col">
          Columna 1
        </div>
        <div className="col">
          Columna 2
        </div>
        <div className="col">
          Columna 3
        </div>
        <div className="col">
          Columna 4
        </div>
      </div>
      
     </div>     
    </div>
    
  )
}

export default App
