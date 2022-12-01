import "./post.css"
import {Link} from 'react-router-dom'

const Post = ({post}) => {
  const pf="http://localhost:5000/images/"
 
  return (
    <Link to={`/post/${post._id}`} className="link" >

    <div className="post" >
      {post&& post.photo && ( <img src={pf+post.photo} alt="" className="postImg" />)}
       
        <div className="postInfo">
          
           

           <span className="postTitle">{post&& post.title}</span>
          
           <hr />
           <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc" >
       {post&& post.desc}
        </p>

    </div>
    </Link>
  )
}

export default Post