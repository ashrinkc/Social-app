import React from 'react'
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">AshrinSocial</span>
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
            <img src="https://images.hdqwalls.com/download/tyrion-lannister-and-daenerys-targaryen-game-of-thrones-4k-ry-640x960.jpg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}

export default Topbar