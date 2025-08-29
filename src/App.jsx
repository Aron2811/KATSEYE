import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './component/navBar'
import Members from './component/Members'
import Latest from './component/Latest'
function App() {
  

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path='/members' element={<Members />}></Route>
      </Routes>
      <Routes>
        <Route path='/latest' element={<Latest />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
