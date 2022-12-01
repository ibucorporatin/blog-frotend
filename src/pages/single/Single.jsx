import SideBar from "../../component/sideBar/SideBar"
import SinglePost from "../../component/singlePost/SinglePost"
import "./single.css"

const Single = () => {
  return (
    <div className="single" >
         <SinglePost/>
        <SideBar/>
    </div>
  )
}

export default Single