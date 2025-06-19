import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router"
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Hello from './pages/Hello'
import Register from './pages/Register'
import NavBar from './pages/components/NavBar'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' 
        element={<Homepage />}></Route>

        <Route path='/about' 
        element={<About />}></Route>

        <Route path='/contact' 
        element={<Contact />}></Route> 

        <Route path='/hello' 
        element={<Hello />}></Route>

        <Route path='/Register' 
        element={<Register />}></Route>

      </Routes>
    </Router>
  )
}

export default App
