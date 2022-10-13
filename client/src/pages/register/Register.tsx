import axios from 'axios'
import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import './register.css'
const Register = () => {
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const username = useRef<HTMLInputElement>(null)
    const confirmpassword = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    const handleClick = async(e:any) =>{
        e.preventDefault()
        if(password.current?.value!==confirmpassword.current?.value){
            password.current?.setCustomValidity("passwords did not match")
        }else{
            const user = {
                username : username.current?.value,
                email: email.current?.value,
                password: password.current?.value
            }
            try{
                 await axios.post('http://localhost:5000/api/auth/register',user)
                 navigate('/login')
            }catch(err){
                console.log(err)
            }
        }
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
                    <input placeholder='Username' required className="loginInput" ref={username} />
                    <input placeholder='Email' type="email" required className="loginInput" ref={email} />
                    <input placeholder='Password' type="password" minLength={6} required className="loginInput" ref={password} />
                    <input placeholder='Confirm Password' type="password" required className="loginInput" ref={confirmpassword} />
                    <button className="loginButton" type='submit'>Sign Up</button>
                    
                    <button className="loginRegisterButton" >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register