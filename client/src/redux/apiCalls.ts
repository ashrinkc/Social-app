import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const loginCall = async(userCredential:any,dispatch:any) =>{
    dispatch(loginStart())
    try{
        const res = await axios.post('http://localhost:5000/api/auth/login',userCredential)
        console.log(res.data)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}