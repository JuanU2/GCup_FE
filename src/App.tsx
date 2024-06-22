import { useState } from 'react'
import Form from './Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
        <h1>
            Registrácia Gessayov cup
        </h1>
    <   Form/>
    </div>
  )
}

export default App
