import React from 'react'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import { Route,Routes } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <div className='w-screen h-screen'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />

     
    </Routes>

    <Toaster/>
    </div>
  )
}

export default App
