import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Concun } from "../../context/Context";
import "./write.css"

const Write = () => {
  const navigate= useNavigate()
  const [desc, setdesc] = useState("");
  const [title, settitle] = useState(""); 
  const [categories, setcategories] = useState(""); 
  const [file, setfile] = useState(null);
  const {user}=Concun()
  const handleSubmit=async(e)=>{
  e.preventDefault()
  const newPost={
    title,
    desc,
    userName:user.userName,
    categories
  }
  if(file){
    const data=new FormData();
    const filename= Date.now() + file.name;
    data.append("name",filename);
    data.append("file",file)
    newPost.photo=filename;
    try {
      await axios.post("http://localhost:5000/api/upload",data)
    } catch (err) {
    }
  }

  try {
  const res=  await axios.post("http://localhost:5000/api/posts",newPost)
       navigate(`/post/${res.data._id}`)
  } catch (error) {
    
  }
  }

  return (
    <div className="write" >
      {file&&
    <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      }
      
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
               
            <i className="writeIcon fa-sharp fa-solid fa-plus"></i>
            </label>
            <input type="file" onChange={(e)=>setfile(e.target.files[0])} id="fileInput" style={{display:"none"}} />
            <input type="text" onChange={(e)=>settitle(e.target.value)}  placeholder="Title" className="writeInput" autoFocus={true} />
         
        </div>
        <div className="writeFormGroup" >
        <select className="select" required onChange={e=>setcategories(e.target.value)} >
          <option disabled selected >CATEGORIES</option>
          <option  value="sports">SPORTS</option>
          <option  value="gadget">GADGET</option>
          <option  value="others">OTHERS</option>
        </select>
        </div>
        <div className="writeFormGroup">
            <textarea  onChange={(e)=>setdesc(e.target.value)}   placeholder="Tell your story..." className="writeInput writeText"></textarea>
         
        </div>
      
        <button className="writeSubmit">
            Publish
        </button>
      </form>
    </div>
  )
}

export default Write