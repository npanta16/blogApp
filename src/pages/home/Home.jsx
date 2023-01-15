
import { useState , useEffect} from 'react'
import axios from 'axios';
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import './home.css'
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts]=useState([]);
  const {search}=useLocation();
  
  useEffect(()=>{
    const fetchPost = async ()=>{
      const res = await axios.get( "/post" + search);
      setPosts(res.data);
    }
    fetchPost();
  },[search])
  return (
    <div>
      <Header/>
      <div className="home">
      <Posts posts={posts}/>
      <SideBar/>
      </div>
    </div>
  )
}

export default Home
