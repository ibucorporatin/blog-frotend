import axios from "axios";
import { useEffect,useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { Concun } from "../../context/Context";
import "./singlePost.css"

const SinglePost = () => {
    const navigate=useNavigate()
 const location= useLocation();
 const {user}=Concun()
const id =location.pathname.split("/")[2]
const [post, setpost] = useState({});
const pf="https://clg-project.onrender.com/images/"
useEffect(()=>{
   const getPost=async()=>{
    const res=await axios.get("https://clg-project.onrender.com/api/posts/"+id)
    setpost(res.data)
   }
   getPost()
},[id])

const DeleteHandler=async()=>{
    try {
        await axios.delete(`https://clg-project.onrender.com/api/posts/${post._id}`,{
    data:{userName:user.userName}    
    })
        navigate("/")
    } catch (error) {
        
    }

}
return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            {post.photo&&(
                <img src={pf+post.photo} className="singlePostImg" />
            )}
            <h1 className="singlePostTitle">{post.title}
            {post.userName===user?.userName&&(
                <div className="singlePostEdit">
            <i onClick={()=>navigate(`/update/${post._id}`)} className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i onClick={DeleteHandler} className="singlePostIcon fa-solid fa-trash"></i>
            </div>
                )}
            </h1>
            <div className="singlePostInfo">
               
                    <Link className="link" to={`/?user=${post.userName}`} >
                    <span className="singlePostAuthor"  >
                Author: <b>{post.userName}</b> </span>
                </Link>  
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
           <p className="singlePostDesc" >
           {post.desc}
           </p>
        </div>
    </div>
  )
}

export default SinglePost
