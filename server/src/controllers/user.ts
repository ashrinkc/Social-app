import { errorMonitor } from "events";
import { Request, Response } from "express";
import User from "../models/user.model";
import PostModel from "../models/user.model";

export const updateUser = async(req:Request,res:Response) =>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
       try{
            await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        })
        res.status(200).json("Account has been updated")
       }catch(err:any){
        return res.status(500).json(err)
       }
    }else{
        return res.status(403).json("You can update only your account")
    }
}

export const deleteUser = async(req:Request,res:Response) =>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
       try{
            await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Account has been deleteed")
       }catch(err:any){
        return res.status(500).json(err)
       }
    }else{
        return res.status(403).json("You can delete only your account")
    }
}

export const getUser = async(req:Request,res:Response) =>{
    try{
        const user = User.findById(req.params.id)
        res.status(200).json(user)
    }catch(err:any){
        res.status(500).json(err)
    }
}

export const followUser = async(req:Request,res:Response) =>{
    if(req.body.userId!==req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.params.userId)
            if(!user?.followers.includes(req.body.userId)){ 
                await user?.updateOne({$push:{followers:req.body.userId}})
                await currentUser?.updateOne({$push:{followings:req.params.id}})
                res.status(200).json("User has been followed")
            }else{
                res.status(403).json("You already follow this user")
            }
        }catch(err:any){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You cannot follow youself")
    }
}

export const unfollowUser = async(req:Request,res:Response) =>{
    if(req.body.userId!==req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.params.userId)
            if(user?.followers.includes(req.body.userId)){ 
                await user?.updateOne({$pull:{followers:req.body.userId}})
                await currentUser?.updateOne({$pull:{followings:req.params.id}})
                res.status(200).json("User has been unfollowed")
            }else{
                res.status(403).json("You already unfollow this user")
            }
        }catch(err:any){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You cannot unfollow youself")
    }
}