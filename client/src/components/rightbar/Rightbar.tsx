import React from 'react'
import './rightbar.css'
import CakeIcon from '@mui/icons-material/Cake';
import { Users } from '../../dummyData';
import Online from '../online/Online';
const Rightbar = ({profile}:any) => {
  const homeRightbar = () =>{
    return(
      <>
        <div className="birthdayContainer">
          <CakeIcon className="birthdayImg" htmlColor='red' />
          <span className="birthdayText">
            <b>Pola Foster</b>  and <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img src="https://www.researchgate.net/publication/338375209/figure/fig1/AS:942278470283264@1601668102624/Coca-Cola-advertisement-in-2010.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} id={u.id} profilePicture={u.profilePicture} username={u.username} />
          ))}
        </ul>
      </>
    )
  }

  const ProRight = () =>{
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Kathmandu</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Nepal</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f3d0ed3-5a4c-45f8-93b3-54eb682c5a81/de89cz8-6b6a23c9-1578-4489-9320-cb9c993476ae.jpg/v1/fill/w_962,h_831,q_70,strp/arthur_morgan___red_dead_redemption_2_by_darko_simple_art_de89cz8-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODg1IiwicGF0aCI6IlwvZlwvM2YzZDBlZDMtNWE0Yy00NWY4LTkzYjMtNTRlYjY4MmM1YTgxXC9kZTg5Y3o4LTZiNmEyM2M5LTE1NzgtNDQ4OS05MzIwLWNiOWM5OTM0NzZhZS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ReBhZ4LFH4xnI_XfD4jy2z3tGRSmV3CQ-f4TInRdhUk" alt="" className="rightbarFollowigImg" />
            <span className="rightbarFollowingName">Micah</span>
          </div>
          <div className="rightbarFollowing">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f3d0ed3-5a4c-45f8-93b3-54eb682c5a81/de89cz8-6b6a23c9-1578-4489-9320-cb9c993476ae.jpg/v1/fill/w_962,h_831,q_70,strp/arthur_morgan___red_dead_redemption_2_by_darko_simple_art_de89cz8-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODg1IiwicGF0aCI6IlwvZlwvM2YzZDBlZDMtNWE0Yy00NWY4LTkzYjMtNTRlYjY4MmM1YTgxXC9kZTg5Y3o4LTZiNmEyM2M5LTE1NzgtNDQ4OS05MzIwLWNiOWM5OTM0NzZhZS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ReBhZ4LFH4xnI_XfD4jy2z3tGRSmV3CQ-f4TInRdhUk" alt="" className="rightbarFollowigImg" />
            <span className="rightbarFollowingName">Micah</span>
          </div>
          <div className="rightbarFollowing">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f3d0ed3-5a4c-45f8-93b3-54eb682c5a81/de89cz8-6b6a23c9-1578-4489-9320-cb9c993476ae.jpg/v1/fill/w_962,h_831,q_70,strp/arthur_morgan___red_dead_redemption_2_by_darko_simple_art_de89cz8-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODg1IiwicGF0aCI6IlwvZlwvM2YzZDBlZDMtNWE0Yy00NWY4LTkzYjMtNTRlYjY4MmM1YTgxXC9kZTg5Y3o4LTZiNmEyM2M5LTE1NzgtNDQ4OS05MzIwLWNiOWM5OTM0NzZhZS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ReBhZ4LFH4xnI_XfD4jy2z3tGRSmV3CQ-f4TInRdhUk" alt="" className="rightbarFollowigImg" />
            <span className="rightbarFollowingName">Micah</span>
          </div>
          <div className="rightbarFollowing">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f3d0ed3-5a4c-45f8-93b3-54eb682c5a81/de89cz8-6b6a23c9-1578-4489-9320-cb9c993476ae.jpg/v1/fill/w_962,h_831,q_70,strp/arthur_morgan___red_dead_redemption_2_by_darko_simple_art_de89cz8-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODg1IiwicGF0aCI6IlwvZlwvM2YzZDBlZDMtNWE0Yy00NWY4LTkzYjMtNTRlYjY4MmM1YTgxXC9kZTg5Y3o4LTZiNmEyM2M5LTE1NzgtNDQ4OS05MzIwLWNiOWM5OTM0NzZhZS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ReBhZ4LFH4xnI_XfD4jy2z3tGRSmV3CQ-f4TInRdhUk" alt="" className="rightbarFollowigImg" />
            <span className="rightbarFollowingName">Micah</span>
          </div>
          <div className="rightbarFollowing">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f3d0ed3-5a4c-45f8-93b3-54eb682c5a81/de89cz8-6b6a23c9-1578-4489-9320-cb9c993476ae.jpg/v1/fill/w_962,h_831,q_70,strp/arthur_morgan___red_dead_redemption_2_by_darko_simple_art_de89cz8-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODg1IiwicGF0aCI6IlwvZlwvM2YzZDBlZDMtNWE0Yy00NWY4LTkzYjMtNTRlYjY4MmM1YTgxXC9kZTg5Y3o4LTZiNmEyM2M5LTE1NzgtNDQ4OS05MzIwLWNiOWM5OTM0NzZhZS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ReBhZ4LFH4xnI_XfD4jy2z3tGRSmV3CQ-f4TInRdhUk" alt="" className="rightbarFollowigImg" />
            <span className="rightbarFollowingName">Micah</span>
          </div>
          <div className="rightbarFollowing">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f3d0ed3-5a4c-45f8-93b3-54eb682c5a81/de89cz8-6b6a23c9-1578-4489-9320-cb9c993476ae.jpg/v1/fill/w_962,h_831,q_70,strp/arthur_morgan___red_dead_redemption_2_by_darko_simple_art_de89cz8-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODg1IiwicGF0aCI6IlwvZlwvM2YzZDBlZDMtNWE0Yy00NWY4LTkzYjMtNTRlYjY4MmM1YTgxXC9kZTg5Y3o4LTZiNmEyM2M5LTE1NzgtNDQ4OS05MzIwLWNiOWM5OTM0NzZhZS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ReBhZ4LFH4xnI_XfD4jy2z3tGRSmV3CQ-f4TInRdhUk" alt="" className="rightbarFollowigImg" />
            <span className="rightbarFollowingName">Micah</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       
        <ProRight/>
      </div>
    </div>
  )
}

export default Rightbar