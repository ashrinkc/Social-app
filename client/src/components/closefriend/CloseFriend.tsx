import React from 'react'
interface UserI{
    id:number,
    profilePicture:string,
    username:string
}
const CloseFriend = ({id,profilePicture,username}:UserI) => {
  return (
        <li className="sidebarFriends">
            <img src={profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{username}</span>
          </li>
    
  )
}

export default CloseFriend