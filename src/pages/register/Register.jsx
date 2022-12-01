import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import "./register.css"

export const Register = () => {
  const navigate= useNavigate()
   const [userName, setuserName] = useState("");
   const [email, setemail] = useState("");
   const [password, setpassword] = useState("");
   const [error, seterror] = useState(false);
   const submithandler= async(e)=>{
e.preventDefault()
seterror(false)
try {
  const res=await axios.post("https://blog-backend-ji2z.onrender.com/api/auth/register",{
    userName,email,password,profilePic:""

   })
 res.data&&navigate("/login")
} catch (error) {
  seterror(true)
}
   }
  return (
    <div className="register" >
        <span className="registerTitle">Register</span>
        <form  className="registerForm" onSubmit={submithandler} >
        <label >UserName</label>
            <input value={userName} onChange={(e)=>setuserName(e.target.value)} className="registerInput" type="text" placeholder="Enter your UserName..." />
            <label >Email</label>
            <input value={email} onChange={(e)=>setemail(e.target.value)} className="registerInput" type="text" placeholder="Enter your Email..." />
            <label >Possword</label>
            <input value={password} onChange={(e)=>setpassword(e.target.value)}  className="registerInput" type="password" placeholder="Enter your Passwors..."/>
            <button className="registerButton" >Register</button>
            {error&&<h2 style={{color:"red",marginTop:"15px"}} >something went wrong</h2>}
        </form>
       <Link to="/login" className='link'> <button className="registerLoginButton" >LOGIN</button></Link>
    </div>
  )
}
