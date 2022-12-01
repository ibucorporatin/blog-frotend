import "./header.css"

const Header = () => {
  return (
    <div className="header" >
        <div className="headerTitles">
            <span className="headerTitleSm" >My Blogs</span>
            <span className="headerTitleLg" >Let Start.. </span>
        </div>
        <img src="https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073__340.jpg" alt="" className="headerImg" />
    </div>
  )
}

export default Header