import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/user/Register'
import Login from './pages/user/Login'
import Home from './pages/home/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
  )
}

export default App