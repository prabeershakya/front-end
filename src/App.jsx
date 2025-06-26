import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router"
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Hello from './pages/Hello'
import Register from './pages/Register'
import NavBar from './pages/components/NavBar'
import FormData from './pages/form'
import List from './pages/Buttons'
import Login from './pages/login'

import toast, { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Toaster position='top-center' reverseOrder={true} />
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

        <Route path='/form' 
        element={<FormData />}></Route>

        <Route path='/lis' 
        element={<List />}></Route>

        <Route path='/login' 
        element={<Login />}></Route>
        
      </Routes>
    </Router>
  )
}

export default App
