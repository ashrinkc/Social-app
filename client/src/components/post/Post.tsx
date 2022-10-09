import React from 'react'
import'./post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Post = () => {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="https://images.hdqwalls.com/download/tyrion-lannister-and-daenerys-targaryen-game-of-thrones-4k-ry-640x960.jpg" alt="" className="postProfileImg" />
                    <span className="postUsername">Ashrin K.C</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey this is my first post</span>
                <img src="https://images.hdqwalls.com/download/tyrion-lannister-and-daenerys-targaryen-game-of-thrones-4k-ry-640x960.jpg" alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUpIcon className='likeIcon' htmlColor='blue'/>
                    <FavoriteIcon className='likeIcon' htmlColor='red'/>
                    <span className="postLikeCounter">10 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post