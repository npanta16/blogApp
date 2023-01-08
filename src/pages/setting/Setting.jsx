import './setting.css'
import Sidebar from '../../components/sidebar/SideBar'

const Setting = () => {
  return (
    <div className="setting">
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Your Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>
            <form className="settingForm">
                <label>Profile Picture</label>
                <div className="settingPP">
                <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
            <i className=" settingPPIcon fa-sharp fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/> 
                </div>
                <label >Username</label>
                <input type="text" placeholder="Narayan" />
                <label >Email</label>
                <input type="text" placeholder="npanta@gmail.com" />
                <label >Username</label>
                <input type="text" placeholder="Narayan" />
                <label >Password</label>
                <input type="password"  />
                <button className="settingSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Setting
