import React,{useState,useEffect} from 'react'
import'./post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Users } from '../../dummyData';
import axios from 'axios'
import {format} from'timeago.js'
import {useNavigate} from 'react-router-dom'
interface propI{
    id:number,
    desc:string | undefined,
    photo:string,
    date:string,
    userId:number,
    like:number,
    comment:number
}



const Post = ({id,desc,photo,date,userId,like,comment}:propI) => {

    type UserI = {
        profilePicture?: string,
        username?: string,
    }
    const navigate = useNavigate()
    const [lik,setLik] = useState(like)
    const [isLiked,setisLiked] = useState(false)
    const [user,setUser] = useState<UserI>({})
    const likeHandler = () =>{
        setLik(isLiked ? lik - 1:lik+1)
        setisLiked(!isLiked)
} 
 useEffect(()=>{
    const fetchUser = async() =>{
     const res = await axios.get(`http://localhost:5000/api/users?userId=${userId}`)
     setUser(res.data)
     console.log(res)
    }
    fetchUser()
  },[userId])
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    
                    <img onClick={()=>{
                        navigate(`/profile/${user?.username}`)
                    }} src={user?.profilePicture || "https://assets.entrepreneur.com/content/3x2/2000/20190918135414-tommy-shelby-peaky-blinders.jpeg?crop=1:1"} alt="" className="postProfileImg" />
                    <span className="postUsername">{user?.username}</span>
                    <span className="postDate">{format(date)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{desc}</span>
                <img src={photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUpIcon className='likeIcon' onClick={likeHandler} htmlColor='blue'/>
                    <FavoriteIcon className='likeIcon' onClick={likeHandler}  htmlColor='red'/>
                    <span className="postLikeCounter">{lik} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post