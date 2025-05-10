import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/a-propos' Component={About}/>
        <Route path='/not-found' Component={NotFound}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
