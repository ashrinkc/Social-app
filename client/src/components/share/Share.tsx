import React,{useRef,useState} from 'react'
import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useSelector } from 'react-redux';
import { isNull } from 'util';
import axios from 'axios';
const Share = () => {
    const user = useSelector((state:any)=>state.user.user)
    const desc = useRef<HTMLInputElement>(null)
    const [file,setFile] = useState<File | null>(null)
    const submitHandler = async(e:any) =>{
        e.preventDefault()
        const newPost = {
            userId : user._id,
            desc: desc.current?.value
        }
        try{
          await axios.post('http://localhost:5000/api/posts',newPost)
        }catch(err){}
    }
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={user?.profilePicture?user.profilePicture:"https://images.hdqwalls.com/download/tyrion-lannister-and-daenerys-targaryen-game-of-thrones-4k-ry-640x960.jpg"} alt="" className="shareProfileImg" />
                <input placeholder={'Whats in your mind?' + user?.username} className="shareInput" ref={desc} />
            </div>
            <hr className="shareHr" />
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor='file' className="shareOption">
                        <PermMediaIcon htmlColor="tomato" className='shareIcon'/>
                        <span className='shareOptionText'>Photo or Video</span>
                        <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files && e.target.files[0])} />
                    </label>
                    <div className="shareOption">
                        <LabelIcon htmlColor="blue" className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <LocationOnIcon htmlColor="green" className='shareIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor="goldenrod" className='shareIcon'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className="shareButton" type='submit'>Share</button>
            </form>
        </div>
    </div>
  )
}

export default Share