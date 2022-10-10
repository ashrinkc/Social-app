import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import { Posts } from '../../dummyData'
const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map(p=>(
          <Post key={p.id} id={p.id} desc={p.desc} photo={p.photo} date={p.date} userId={p.userId} like={p.like} comment={p.comment}/>
        ))}  
      </div>
    </div>
  )
}

export default Feed