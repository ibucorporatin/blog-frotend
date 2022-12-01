import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Concun } from '../../context/Context';
import "./sideBar.css"
const SideBar = () => {
    const [cats, setcats] = useState([]);
    const {user}=Concun()
    const pf="http://localhost:5000/images/"
    useEffect(() => {
      const getCat=async()=>{
        const res=await axios.get("http://localhost:5000/api/categories/")
        setcats(res.data)
      }
      getCat()
    }, []);
  return (
    <div className='sidebar' >
        <div className="sidebarItem">
            <span className='sidebarTitle' >ABOUT ME</span>
           
           {user?user.profilePic?<img src={pf+user.profilePic} alt="" />:<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />:<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />}
          
            <p>{user&& user.userName}</p>
        </div>
            <div className="sidebarItem">
                <span className='sidebarTitle' >CATEGORIES</span>
                <ul className='sidebarList' >
                    {
                        cats.map((cat)=>{
                            return <Link key={cat._id} className='link' to={`/?cat=${cat.name.toLowerCase()}`} > <li className='sidebarListItem'  >{cat.name}</li></Link>
                        })
                    }
                   
                
                </ul>
            </div>
            <div className="sidebarItem">
            <span className='sidebarTitle' >FOLLOW US</span>
            <div className='sidebarSocial' >
            <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
        </div>
  )
}

export default SideBar