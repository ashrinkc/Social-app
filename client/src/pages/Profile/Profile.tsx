import React,{useState,useEffect} from 'react'
import './profile.css'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import axios from 'axios'
import {useParams} from 'react-router-dom'
const Profile = () => {
  
  type UserI = {
    username?:string,
    desc?:string
  }
  const [user,setUser] = useState<UserI>({})
  const params = useParams()
   useEffect(()=>{
    const fetchUser = async() =>{
     const res = await axios.get(`http://localhost:5000/api/users?username=${params.username}`)
     setUser(res.data)
     
    }
    fetchUser()
  },[])
  return (
    <div>
         <Topbar/>
        <div className="profile">
          <Sidebar/>
          <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F06%2F000160162hr-2000.jpg&q=60" alt="" className="profileCoverImg" />
                <img src="https://hips.hearstapps.com/esquireuk.cdnds.net/15/37/2048x2730/2048x2730-walter-white-rumour-bryan-cranston-43-jpg-21006810.jpg?resize=480:*" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>{user.username}</h4>
                    <span className="profileInfoDesc">{user.desc}</span>
                </div>
            </div>
            <div className="profileRightBottom">
                  <Feed username={params.username}/>
          <Rightbar user={user} />
            </div>
          </div>
        
        </div>
    </div>
  )
}

export default Profile