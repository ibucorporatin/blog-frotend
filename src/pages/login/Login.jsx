import axios from "axios"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { LoginFailiure, LoginStart, LoginSuccess } from "../../context/Action"
import { Concun } from "../../context/Context"
import "./login.css"

export const Login = () => {

  const userName=useRef()
  const password=useRef()
 const {dispatch,isFetching}= Concun()

 const loginFormHandler=async(e)=>{
e.preventDefault()
dispatch(LoginStart())
try {
      const res= await axios.post("https://blog-backend-ji2z.onrender.com/api/auth/login",{
        userName:userName.current.value,
        password:password.current.value,
      })
      res&&dispatch(LoginSuccess(res.data))
} catch (error) {
  dispatch(LoginFailiure())
}
 }

  return (
    <div className="login" >
        <span className="loginTitle">Login</span>
        <form  className="loginForm" onSubmit={loginFormHandler} >
            <label >UserName</label>
            <input ref={userName} className="loginInput" type="text" placeholder="Enter your UserName..." />
            <label >Possword</label>
            <input  ref={password} className="loginInput" type="password" placeholder="Enter your Passwors..."/>
            <button className="loginButton" disabled={isFetching} >Login</button>
        </form>
        <Link to="/register" className='link'><button className="loginRegisterButton" >REGISTER</button></Link>
    </div>
  )
}
