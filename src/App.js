import React from 'react'
import TopBar from './components/topbar/TopBar'
import Home from './pages/home/Home'
import Setting from './pages/setting/Setting'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import {
  createBrowserRouter,
  RouterProvider, BrowserRouter,
  Route, Routes,
  Link,
} from "react-router-dom";
{/*const router= createBrowserRouter([
  {
    path:'/',
    elecment:<Home/>
  },
  {
    path:'/login',
    elecment:<Login/>
  },
  {
    path:'/register',
    elecment:<Register/>
  },
  {
    path:'/setting',
    elecment:<Setting/>
  },
  {
    path:'/write',
    elecment:<Write/>
  },
  {
    path:'/single',
    elecment:<Single/>
  },

])
*/}
function App() {
  const user= true;
  return (
    <BrowserRouter>
    <TopBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/register' element={user? <Home/>:<Register/>}/>ß
      <Route path='/login' element={user?<Home/>:<Login/>}/>
      <Route path='/setting' element={user?<Setting/>:<Register/>}/>
      <Route path='/write' element={user?<Write/>:<Register/>}/>
      <Route path='/post/:postId' element={<Single/>}/>


    </Routes>
    
    
 
    
    </BrowserRouter>
  )
}

export default App
