import { useEffect, useState } from 'react';
import { useLocation, Link} from 'react-router-dom'
import axios from 'axios';
import './singlePost.css'

const SinglePost = () => {
  const[post, setPost]=useState({})
  const location = useLocation()
  const path=(location.pathname.split('/')[2]);
  useEffect(()=>{
    const getPost = async()=>{
      const res=await axios.get('/post/' +path);
      setPost(res.data);
    }
    getPost();
  },[path])
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (

        <img className="singlePostImg" 
        src={post.photo} alt="" />
      
        )}
      
    <h1 className="singlePostTitle">{post.title}
    <div className="singlePostEdit">
    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
    <i className="singlePostIcon fa-solid fa-trash-can"></i>
    </div>
    </h1>
    <div className="singlePostInfo">
      <span className="singlePostAuthor">
        <Link to={`/?user=${post.username}`} className="link">
        Author: <b>{post.username}</b>
        </Link>
      </span>
      <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
    </div>
    <p className="singlePostDec">{post.desc}</p>
    </div>
    </div>
  )
}

export default SinglePost
