import React from 'react'
interface UserI{
    id:number,
    profilePicture:string,
    username:string
}

const Online = ({id,profilePicture,username}:UserI) => {
  return (
    <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={profilePicture} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{username}</span>
    </li>
  )
}

export default Online