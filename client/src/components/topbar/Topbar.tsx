import React from 'react'
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Topbar = () => {
    const user = useSelector((state:any)=>state.user.user)
    const navigate = useNavigate()
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft"> 
            <Link to="/" style={{textDecoration:"none"}} >
                <span className="logo">AshrinSocial</span>
            </Link>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <SearchIcon className='searchIcon'/>
                <input placeholder='search for friends,place or other videos' className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <PersonIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <ChatBubbleIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <NotificationsIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img onClick={()=>{navigate(`/profile/${user?.username}`)}} src={user?.profilePicture?user.profilePicture:"https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"} alt="" className="topbarImg" />
        </div>
    </div>
  )
}

export default Topbar