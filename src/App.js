import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './pages/home/Home'
import TobBar from './component/tobBar/TobBar'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Setting from './pages/setting/Setting'
import { Login } from './pages/login/Login'
import { Register } from './pages/register/Register'
import Post from './component/post/Post'
import SinglePost from './component/singlePost/SinglePost'
import { Concun } from './context/Context'
import Update from './pages/update/Update'

const App = () => {
  const {user}= Concun()
  return (
    <div>
      <TobBar/>
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={user?<Home/>:<Register />} />
      <Route path="/login" element={user?<Home/>:<Login/>} />
      <Route path="/write" element={user?<Write/>:<Register/>} />
      <Route path="/setting" element={user?<Setting/>:<Register/>} />
      <Route path="/post/:id" element={<Single/>} />
      <Route path="/update/:id" element={user?<Update/>:<Register/>} />
    </Routes>
    </div>
  )
}

export default App