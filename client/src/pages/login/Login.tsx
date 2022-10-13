import React,{useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginCall } from '../../redux/apiCalls'
import './login.css'
import {CircularProgress} from '@mui/material'
const Login = () => {
    const dispatch = useDispatch()
    const fetch = useSelector((state:any)=>state.user.isFetching)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const handleClick = (e:any) =>{
        e.preventDefault()
        loginCall({email:email.current?.value,password:password.current?.value},dispatch)
    }
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Ashrinsocial</h3>
                <span className="loginDesc">
                    Connect with anyone around the world.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder='Email' required className="loginInput" ref={email} />
                    <input placeholder='Password' required minLength={6} type="password" className="loginInput" ref={password} />
                    <button className="loginButton" disabled={fetch}>{ fetch ? <CircularProgress color='inherit'/> : "Log In"}</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">
                        Create a new account
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login