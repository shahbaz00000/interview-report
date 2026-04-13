import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'


const App = () => {
  return (
    <GoogleOAuthProvider clientId='8315785532-ge11u318pa08ocq9q1njugkbjfn93n10.apps.googleusercontent.com'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/generate-report' element={<Home />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App