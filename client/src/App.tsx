import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Profile from './pages/Profile/Profile'
import Register from './pages/register/Register'
import {Navigate, Route,Routes, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
const App = () => {

  const user = useSelector((state:any)=>state.user.user)
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={user?<Navigate to="/"/>:<Login/>}/>
          <Route path='/register' element={user?<Navigate to="/"/>:<Register/>}/>
          <Route path='/profile/:username' element={<Profile/>}/>
        </Routes>
    </div>
  )
}

export default App