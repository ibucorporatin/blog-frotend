import React from 'react'
import { Link } from 'react-router-dom'
import { LogOut } from '../../context/Action'
import { Concun } from '../../context/Context'
 import "./topBar.css"

const TobBar = () => {
  const {user,dispatch}= Concun()
  const pf="https://clg-project.onrender.com/images/"
  const logoutHandler=()=>{
dispatch(LogOut())
  }
  return (
    <div className='top' >
        <div className='topLeft' ><i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topCenter' >
            <ul className='topList' >
               <li className='topListItem' > <Link to="/" className='link' >HOME</Link></li>
               <li className='topListItem' > <Link to="/" className='link' >ABOUT</Link></li>
               <li className='topListItem' > <Link to="/" className='link' >CONTACT</Link> </li>
               <li className='topListItem' > <Link to="/write" className='link' >WRITE</Link>  </li>
               <li className='topListItem' onClick={logoutHandler}  >  {user&&"LOGOUT"}  </li>
            </ul>
        </div>
        <div className='topRight' >
           {user?( 
            <Link to="/setting">
          { user.profilePic?<img src={pf+user.profilePic} alt="" className='topImg' />:<img className='topImg' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />}
            </Link>
           ):
           (<ul className='topList'>
            <li className='topListItem' >
           <Link to="/register" className='link'>REGISTER</Link>
            </li>
            <li className='topListItem' >
            <Link to="/login" className='link' >LOGIN</Link>
            </li>
           
           </ul>)
           }
            <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TobBar