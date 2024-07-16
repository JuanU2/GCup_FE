import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Registration from './pages/Registration'
import React from 'react'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registracia" element={<Registration />} />
    </Routes>
  )
}

export default App
