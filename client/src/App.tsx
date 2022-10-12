import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Profile from './pages/Profile/Profile'
import Register from './pages/register/Register'
import {Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/profile/:username' element={<Profile/>}/>
        </Routes>
    </div>
  )
}

export default App