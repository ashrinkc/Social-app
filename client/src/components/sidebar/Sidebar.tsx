import React from 'react'
import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <QuestionMarkIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriends">
            <img src="https://i0.wp.com/mistyaquavenatus.com/wp-content/uploads/2015/08/jaime_lannister_hbo_portrait.jpg?fit=600%2C600&ssl=1" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Xrin Tin</span>
          </li>
          <li className="sidebarFriends">
            <img src="https://i0.wp.com/mistyaquavenatus.com/wp-content/uploads/2015/08/jaime_lannister_hbo_portrait.jpg?fit=600%2C600&ssl=1" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Xrin Tin</span>
          </li>
          <li className="sidebarFriends">
            <img src="https://i0.wp.com/mistyaquavenatus.com/wp-content/uploads/2015/08/jaime_lannister_hbo_portrait.jpg?fit=600%2C600&ssl=1" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Xrin Tin</span>
          </li>
          <li className="sidebarFriends">
            <img src="https://i0.wp.com/mistyaquavenatus.com/wp-content/uploads/2015/08/jaime_lannister_hbo_portrait.jpg?fit=600%2C600&ssl=1" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Xrin Tin</span>
          </li>
          <li className="sidebarFriends">
            <img src="https://i0.wp.com/mistyaquavenatus.com/wp-content/uploads/2015/08/jaime_lannister_hbo_portrait.jpg?fit=600%2C600&ssl=1" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Xrin Tin</span>
          </li>
          <li className="sidebarFriends">
            <img src="https://i0.wp.com/mistyaquavenatus.com/wp-content/uploads/2015/08/jaime_lannister_hbo_portrait.jpg?fit=600%2C600&ssl=1" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Xrin Tin</span>
          </li>
          <li className="sidebarFriends">
            <img src="https://i0.wp.com/mistyaquavenatus.com/wp-content/uploads/2015/08/jaime_lannister_hbo_portrait.jpg?fit=600%2C600&ssl=1" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Xrin Tin</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar