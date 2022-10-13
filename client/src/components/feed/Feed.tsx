import React,{useState,useEffect} from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import { Posts } from '../../dummyData'
import axios from 'axios'
import { useSelector } from 'react-redux'

interface FeedI{
  username?:string
}
const Feed = ({username}:FeedI) => {
  const [posts,setPosts] = useState<object[]>([])
  const user = useSelector((state:any)=>state.user.user)
  useEffect(()=>{
    const fetchPosts = async() =>{
     const res = username
      ? await axios.get(`http://localhost:5000/api/posts/profile/${username}`) 
     : await axios.get(`http://localhost:5000/api/posts/timeline/${user._id}`)
     setPosts(res.data)
    }
    fetchPosts()
  },[username,user._id])
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {posts.map(p=>(
          //@ts-ignore
          <Post key={p._id} id={p._id} desc={p.desc} photo={p.img} date={p.createdAt} userId={p.userId} like={p.likes.length} comment={p.comment}/>
        ))}  
      </div>
    </div>
  )
}

export default Feed