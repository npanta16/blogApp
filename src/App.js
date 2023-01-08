import React from 'react'
import TopBar from './components/topbar/TopBar'
import Home from './pages/home/Home'
import Setting from './pages/setting/Setting'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Login from './pages/login/Login'

function App() {
  return (
    <div>
     <TopBar/>
    {/*<Home/> */} 
    {/*<Single/> */} 
    {/* <Write/> */} 
     {/* <Setting/> */} 
     <Login/>
    
 
    
    </div>
  )
}

export default App
