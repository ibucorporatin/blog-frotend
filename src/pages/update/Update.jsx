import axios from "axios";
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { Concun } from "../../context/Context";


const Update = () => {
  const navigate= useNavigate()
  const location= useLocation();
  const id =location.pathname.split("/")[2]
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [image, setimage] = useState(null);
  const [file, setfile] = useState(null);
  const {user}=Concun()
  const pf="https://clg-project.onrender.com/images/"
  useEffect(() => {
    const getPost=async()=>{
        const res=await axios.get("https://clg-project.onrender.com/api/posts/"+id)
      
        const{title,desc,photo}=res.data
        settitle(title)
        setdesc(desc)

     setimage(photo)

       }
       getPost()
  }, [id]);
  const handleSubmit=async(e)=>{
  e.preventDefault()
  const newPost={
    title,
    desc,
    userName:user.userName,
    
  }
  if(file){
    const data=new FormData();
    const filename= Date.now() + file.name;
    data.append("name",filename);
    data.append("file",file)
    newPost.photo=filename;
    try {
      await axios.post("https://clg-project.onrender.com/api/upload",data)
    } catch (err) {
    }
  }

  try {
  const res=  await axios.put(`https://clg-project.onrender.com/api/posts/${id}`,newPost)
       navigate(`/post/${res.data._id}`)
  } catch (error) {
    
  }
  }
  let a=false
  if(file||image) a=true
  

  return (
    <div className="write" >
      { a &&
    <img className="writeImg" src={!file?`${pf}${image}`:URL.createObjectURL(file)} alt="" />
      }
      
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
               
            <i className="writeIcon fa-sharp fa-solid fa-plus"></i>
            </label>
            <input type="file" onChange={(e)=>setfile(e.target.files[0])} id="fileInput" style={{display:"none"}} />
            <input type="text" onChange={(e)=>settitle(e.target.value)} value={title}   placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea  onChange={(e)=>setdesc(e.target.value)} value={desc}  placeholder="Tell your story..." className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">
            update
        </button>
      </form>
    </div>
  )
}

export default Update