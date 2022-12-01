import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Header from "../../component/header/Header"
import Posts from "../../component/posts/Posts"
import SideBar from "../../component/sideBar/SideBar"
import "./home.css"

const Home = () => {
  const [posts,setposts]=useState([])
  const {search}=useLocation()

  useEffect(()=>{
    const fetchPost= async()=>{
    const res=await axios.get("http://localhost:5000/api/posts"+search)
    setposts(res.data)
    
    }
    fetchPost()
  },[search])
  
  

if(posts.length===0){
  return (
    <>
    <Header/>
   <div className="home" >
   <h1>post is not available</h1>
    <SideBar/>
   </div>
</>
  )
}else{
  return (
    <>
        <Header/>
       <div className="home" >
       <Posts posts={posts} />
        <SideBar className="side" />
       </div>
    </>

  
  )
}
}

export default Home