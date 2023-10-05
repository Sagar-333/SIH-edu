import React from 'react'
import {Routes, Route} from "react-router-dom"
import Register from './Pages/Register/register'
import Login from './Pages/Login/login'
import Home from './Pages/Home/home'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>} /> 
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App