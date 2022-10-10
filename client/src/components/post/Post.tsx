import React,{useState} from 'react'
import'./post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Users } from '../../dummyData';

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
    const [lik,setLik] = useState(like)
    const [isLiked,setisLiked] = useState(false)

    const likeHandler = () =>{
        setLik(isLiked ? lik - 1:lik+1)
        setisLiked(!isLiked)
} 
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u)=>u.id===userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">{Users.filter((u)=>u.id===userId)[0].username}</span>
                    <span className="postDate">{date}</span>
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