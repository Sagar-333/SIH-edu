import React from 'react'
import {Routes, Route} from "react-router-dom"
import Register from './Pages/Register/register'
import Login from './Pages/Login/login'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>} /> 
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App