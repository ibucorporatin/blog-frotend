import axios from "axios"
import { useState } from "react"
import SideBar from "../../component/sideBar/SideBar"
import { UPDATEFailiure, UPDATEStart, UPDATESuccess } from "../../context/Action"
import { Concun } from "../../context/Context"
import "./setting.css"

const Setting = () => {
  const {user,dispatch}= Concun()
  const [success, setsuccess] = useState(false);
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [file, setfile] = useState(null);
  const pf="https://clg-project.onrender.com/images/"
  const handleUpdate=async(e)=>{
    e.preventDefault()
    dispatch(UPDATEStart())
    const updatedUser={
      password,
      email,
      userName,
      userId:user._id
    }
   
    if(file){
      const data=new FormData();
      const filename= Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file)
      updatedUser.profilePic=filename;
      try {
        await axios.post("https://clg-project.onrender.com/api/upload",data)
      } catch (err) {
      }
    }
  
    try {
    const res=  await axios.put(`https://clg-project.onrender.com/api/users/${user._id}`,updatedUser)
      setsuccess(true)
      dispatch(UPDATESuccess(res.data))

    } catch (error) {
      dispatch(UPDATEFailiure)
    }
    }
  return (
    <div className="settings" >
        <div className="settingsWrapper">
         <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Account</span>
            <span className="settingsTitleUpdate">Delete Account</span>
         </div>
         <form className="settingsForm" onSubmit={handleUpdate}>
            <label >Profile Picture</label>
            <div className="settingsPP">
                {file?<img src={URL.createObjectURL(file)} alt="" />:user.profilePic?<img src={pf+user.profilePic} alt="" />:<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />}

                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" onChange={(e)=>setfile(e.target.files[0])} style={{display:"none"}} />

            </div>
            <label >UserName</label>
            <input type="text" placeholder={user.userName} onChange={(e)=>setuserName(e.target.value)}  />
            <label >Email</label>
            <input type="email" placeholder={user.email} onChange={(e)=>setemail(e.target.value)}  />
            <label >password</label>
            <input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
            <button className="settingsSubmitButton">Update</button>
            {success&& <span style={{textAlign:"center",color:"green",marginTop:"20px"}} >profile has been updated</span>}
         </form>
        </div>
        <SideBar/>
    </div>
  )
}

export default Setting