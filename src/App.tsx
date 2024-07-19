import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Registration from './pages/Registration'

function App() {
  return (
    <div className='bg-gray-300'>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registracia" element={<Registration />} />
    </Routes>
    </div>
  )
}

export default App
