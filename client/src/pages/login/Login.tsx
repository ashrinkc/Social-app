import React,{useRef} from 'react'
import './login.css'
const Login = () => {
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const handleClick = (e:any) =>{
        e.preventDefault()
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
                    <input placeholder='Email' required type="email" className="loginInput" ref={email} />
                    <input placeholder='Password' required minLength={6} type="password" className="loginInput" ref={password} />
                    <button className="loginButton">Log In</button>
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